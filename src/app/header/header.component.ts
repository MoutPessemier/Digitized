import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { trigger, transition, animate, keyframes } from '@angular/animations';
//import * as kf from './keyframes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  // animations: [
  //   trigger('sideNavAnimator', [
  //     transition('kf =>', animate(1000, keyframes(kf.slideInLeft)))
  //   ])
  // ]
})
export class HeaderComponent implements OnInit {
  animationState: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  sideNav() {
    console.log('sideNav');
  }
  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '300px'
    });
    // dialogRef.afterClosed.subscribe(result => {});
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterFormComponent, {
      width: '300px'
    });
    //dialogRef.afterClosed.subscribe(result => {});
  }

  startAnimation(state: string) {
    console.log(state);
    //make sure you don't use multiple at ones
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
