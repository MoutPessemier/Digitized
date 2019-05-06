import { Component, OnInit, Input, Output } from '@angular/core';
import { CommentDataService } from '../comment-data.service';
import { Image } from '../image.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { Comment } from '../comment.model';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comments') comments: Comment[];
  private messageForm: FormGroup;
  private _user: string;
  // @Output() public newComment = new EventEmitter<Comment>();

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

    this._authService.user$.subscribe(usr => (this._user = usr));
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

  ngOnInit() {}

  editComment() {}

  deleteComment() {}

  onSubmit() {
    if (this._user) {
    } else {
      this.openSnackBar('You need to be logged in to send a message.');
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }

  isAuthor(comment: Comment): boolean {
    return comment.visitorId === this._authService.loggedInUser.id;
  }
}
