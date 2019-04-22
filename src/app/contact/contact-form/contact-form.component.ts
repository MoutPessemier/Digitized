import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Message } from '../message.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact: FormGroup;
  @Output() public newMessage = new EventEmitter<Message>();
  public readonly contactTypes = ['Question', 'Service', 'Feedback', 'Other'];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.contact = this.fb.group({
      topic: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    this.newMessage.emit(
      new Message(this.contact.value.topic, this.contact.value.message)
    );
    this.openSnackBar('Messages succesfully sent!');
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
