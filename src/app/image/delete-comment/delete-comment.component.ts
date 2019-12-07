import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CommentDataService } from '../comment-data.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteCommentComponent>,
    private _commentDataService: CommentDataService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  cancel() {
    this.openSnackbar('Comment did not get deleted.');
    this.onNoClick();
  }

  delete() {
    this._commentDataService.deleteComment(this.data.comment.myImageId, this.data.comment.id).subscribe(c => {
      console.log(c);
      if (c) {
        this.data.array.splice(this.data.index, 1);
        this.openSnackbar('Comment succesfully deleted.');
      } else {
        this.openSnackbar('Something went wrong deleting the comment, please try again.');
      }
    });
    this.onNoClick();
  }

  private onNoClick(): void {
    this.dialogRef.close();
  }

  private openSnackbar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}
