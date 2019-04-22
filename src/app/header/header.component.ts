import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterFormComponent } from '../authentication/register-form/register-form.component';
import { LoginFormComponent } from '../authentication/login-form/login-form.component';
//import { trigger, transition, animate, keyframes } from '@angular/animations';
import { Image } from '../image/image.model';
import { ActivatedRoute } from '@angular/router';
import { ImageDataService } from '../image/image-data.service';
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
  public animationState: string;
  public image: Image;
  public loadComponent: boolean;
  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _imageService: ImageDataService
  ) {
    //this.loadComponent = false;
    //_route.data.subscribe(item => (this.image = item));
  }

  ngOnInit() {
    if (window.innerWidth <= 992) {
      this.loadComponent = true;
    } else {
      this.loadComponent = false;
    }
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
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  showSideNav(event) {
    if (window.innerWidth <= 992) {
      this.loadComponent = true;
    } else {
      this.loadComponent = false;
    }
  }
}
