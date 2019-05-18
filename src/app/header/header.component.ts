import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterFormComponent } from '../authentication/register-form/register-form.component';
import { LoginFormComponent } from '../authentication/login-form/login-form.component';
import { Image } from '../image/image.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public image: Image;
  public loadComponent: boolean;
  user$ = this._authService.user$;

  constructor(
    public dialog: MatDialog,
    private _authService: AuthenticationService
  ) {}

  ngOnInit() {}

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '300px'
    });
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterFormComponent, {
      width: '300px'
    });
  }

  logout() {
    this._authService.logout();
  }
}
