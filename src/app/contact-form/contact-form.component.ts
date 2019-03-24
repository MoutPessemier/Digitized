import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact: FormGroup;
  //@Output() public newContact = new EventEmitter();

  constructor() {
    this.contact = new FormGroup({
      topic: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  ngOnInit() {}

  onSubmit() {
    //this.newContact.emit(this.contact.value.name);
  }

  getErrorMessage(error: any) {
    if (error.required) {
      return 'is required';
    } else if (error.minLength) {
      return `needs at least ${error.minLength.requiredLength}
      characters (got ${error.minLength.actualLength})`;
    }
  }
}
