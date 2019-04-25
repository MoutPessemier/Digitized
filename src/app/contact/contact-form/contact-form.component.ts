import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Message } from '../message.model';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact: FormGroup;
  @Output() public newMessage = new EventEmitter<Message>();
  public readonly contactTypes = ['Question', 'Service', 'Feedback', 'Other'];
  private _createdMessage: Message;
  private _succes: boolean;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _messageService: MessageService
  ) {}

  ngOnInit() {
    this.contact = this.fb.group({
      topic: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    this.newMessage.emit(
      (this._createdMessage = new Message(
        this.contact.value.topic,
        this.contact.value.message
      ))
    );
    this._messageService
      .sendMessage(this._createdMessage)
      .subscribe(val => (this._succes = val));
    if (this._succes) {
      this.openSnackBar('Messages succesfully sent!');
    } else {
      this.openSnackBar('Something went wrong!');
    }

    this.contact.reset();
  }

  getErrorMessage(error: any) {
    if (error.required) {
      return 'is required';
    } else if (error.minlength) {
      return `need at least ${error.minlength.requiredLength} characters`;
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'close', { duration: 2000 });
  }
}
