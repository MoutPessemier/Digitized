import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommentDataService } from '../comment-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../comment.model';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { User } from 'src/app/authentication/user.model';
import { ChangeCommentComponent } from '../change-comment/change-comment.component';
import { DeleteCommentComponent } from '../delete-comment/delete-comment.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comments') comments: Comment[];
  @Input('imageId') imageId: number;
  public messageForm: FormGroup;
  private _user: string;
  public loggedInUser: User;

  constructor(
    private _commentDataService: CommentDataService,
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.messageForm = this.fb.group({
      message: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(75)]
      ]
    });
  }

  getErrorMessage(error: any) {
    if (error.required) {
      return 'is required';
    } else if (error.minlength) {
      return `need at least ${error.minlength.requiredLength} characters`;
    } else if (error.maxlength) {
      return `max length is ${error.maxlength.requiredLength}`;
    }
  }

  ngOnInit() {
    this._authService.user$.subscribe(usr => (this._user = usr));
    this._authService.loggedInUser$.subscribe(user => {
      this.loggedInUser = user;
    });
  }

  onSubmit() {
    if (this._user) {
      this._commentDataService
        .postComment(
          this.imageId,
          new Comment(
            this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName,
            this.messageForm.value.message,
            new Date(),
            this.imageId,
            this.loggedInUser.id
          )
        )
        .subscribe(com => {
          this.comments.push(com);
          this.messageForm.reset({
            message: '   '
          });
          this.messageForm.markAsUntouched();
          this.messageForm.setErrors({
            required: false,
            minlength: false,
            maxlength: false
          });
          this.messageForm.markAsPristine();
        });
    } else {
      this.openSnackBar('You need to be logged in to send a message.');
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }

  isAuthor(comment: Comment): boolean {
    if (this.loggedInUser) {
      return comment.visitorId === this.loggedInUser.id;
    }
    return false;
  }

  openChangeDialog(comment: Comment) {
    const dialogRef = this.dialog.open(ChangeCommentComponent, {
      width: '300px',
      data: {
        comment,
        array: this.comments,
        index: this.comments.indexOf(comment)
      }
    });
  }

  openDeleteDialog(comment: Comment) {
    const dialogRef = this.dialog.open(DeleteCommentComponent, {
      width: '300px',
      height: '200px',
      data: {
        comment,
        array: this.comments,
        index: this.comments.indexOf(comment)
      }
    });
  }
}
