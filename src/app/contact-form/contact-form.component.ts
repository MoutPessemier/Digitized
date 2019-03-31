import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  NgZone
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Message } from 'src/message.model';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact: FormGroup;
  @Output() public newMessage = new EventEmitter<Message>();
  public readonly contactTypes = ['Question', 'Service', 'Feedback', 'Other'];

  constructor(private fb: FormBuilder, private ngZone: NgZone) {}

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
  }

  getErrorMessage(error: any) {
    if (error.required) {
      return 'is required';
    } else if (error.minLength) {
      return `needs at least ${error.minLength.requiredLength}
      characters (got ${error.minLength.actualLength})`;
    }
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
