import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../authentication/login-form/login-form.component';
import { RegisterFormComponent } from '../authentication/register-form/register-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

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
}
