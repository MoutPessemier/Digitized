import { Component, OnInit } from '@angular/core';
// import { trigger, transition, animate, keyframes } from '@angular/animations';
// import * as kf from './keyframes';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
  // animations: [
  //   trigger('sideNavAnimator', [
  //     transition('* =>', animate(1000, keyframes(kf.slideInLeft)))
  //   ])
  // ]
})
export class SideNavComponent implements OnInit {
  // animationState: string;

  constructor() {}

  ngOnInit() {}

  // startAnimation(state: string) {
  //   console.log(state);
  //   //make sure you don't use multiple at ones
  //   if (!this.animationState) {
  //     this.animationState = state;
  //   }
  // }

  // resetAnimationState() {
  //   this.animationState = '';
  // }
}
