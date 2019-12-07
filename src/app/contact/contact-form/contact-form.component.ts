import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Message } from '../message.model';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '../message.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact: FormGroup;
  public readonly contactTypes = ['Question', 'Service', 'Feedback', 'Other'];
  private _createdMessage: Message;
  private _user: string;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _messageService: MessageService,
    private _authService: AuthenticationService
  ) {
    this._authService.user$.subscribe(usr => (this._user = usr));
  }

  ngOnInit() {
    this.contact = this.fb.group({
      topic: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this._user) {
      this._createdMessage = new Message(this.contact.value.topic, this.contact.value.message, new Date(), this._user);
      this._messageService.postMessage(this._createdMessage).subscribe(val => {
        if (val) {
          this.openSnackBar('Messages succesfully sent!');
        } else {
          this.openSnackBar('Something went wrong!');
        }

        this.contact.reset({
          topic: { value: null },
          message: '     '
        });

        this.contact.markAsUntouched();
        this.contact.setErrors({
          required: false,
          minlength: false
        });
        this.contact.markAsPristine();
      });
    } else {
      this.openSnackBar('You need to be logged in to send a message.');
    }
  }

  getErrorMessage(error: any) {
    if (error.required) {
      return 'is required';
    } else if (error.minlength) {
      return `need at least ${error.minlength.requiredLength} characters`;
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}
