import { Component, OnInit, Input, Output } from '@angular/core';
import { CommentDataService } from '../comment-data.service';
import { Image } from '../image.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('image') image: Image;
  private messageForm: FormGroup;
  // @Output() public newComment = new EventEmitter<Comment>();

  constructor(
    private _commentDataService: CommentDataService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      message: ['', [Validators.minLength(3)]]
    });
  }

  ngOnInit() {}

  editComment() {}

  deleteComment() {}

  onSubmit() {
    // this.newComment.emit(new Comment())
    // this._commentDataService.postComment(this.image.id,);
  }
}
