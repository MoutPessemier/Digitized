import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CommentDataService } from '../comment-data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-change-comment',
  templateUrl: './change-comment.component.html',
  styleUrls: ['./change-comment.component.css']
})
export class ChangeCommentComponent implements OnInit {
  public changeComment: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ChangeCommentComponent>,
    private _fb: FormBuilder,
    private _commentDataService: CommentDataService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.changeComment = this._fb.group({
      change: [
        this.data.comment.content,
        [Validators.required, Validators.minLength(3), Validators.maxLength(75)]
      ]
    });
  }

  ngOnInit() {}

  getErrorMessage(error: any) {
    if (error.required) {
      return 'is required';
    } else if (error.minlength) {
      return `need at least ${error.minlength.requiredLength} characters`;
    } else if (error.maxlength) {
      return `max length is ${error.maxlength.requiredLength}`;
    }
  }

  private onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    let c = new Comment(
      this.data.comment.author,
      this.changeComment.value.change,
      new Date(),
      this.data.comment.myImageId,
      this.data.comment.visitorId
    );
    c.id = this.data.comment.id;
    this._commentDataService.putComment(c.imageId, c.id, c).subscribe(c => {
      if (c) {
        this.data.array[this.data.index] = c;
        this.openSnackbar('Succesfull changed your comment.');
      } else {
        this.openSnackbar('Something went wrong, please try again!');
      }
    });
    this.onNoClick();
  }

  private openSnackbar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}
