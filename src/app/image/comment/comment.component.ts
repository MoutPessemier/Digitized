import { Component, OnInit, Input } from '@angular/core';
import { CommentDataService } from '../comment-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../comment.model';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/authentication/user.model';

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
    private _snackBar: MatSnackBar
  ) {
    this.messageForm = this.fb.group({
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ]
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
      console.log(user);
    });
  }

  editComment(comment: Comment) {
    this._commentDataService.putComment(comment.imageId, this.imageId, comment);
  }

  deleteComment(id: number) {
    this._commentDataService.deleteComment(id, this.imageId);
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
        .subscribe(com => console.log(com));
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
}
