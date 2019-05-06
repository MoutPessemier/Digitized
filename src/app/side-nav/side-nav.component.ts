import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../authentication/login-form/login-form.component';
import { RegisterFormComponent } from '../authentication/register-form/register-form.component';
import { MatDialog } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  user$ = this._authService.user$;
  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private _authService: AuthenticationService
  ) {}

  ngOnInit() {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

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

  logout() {
    this._authService.logout();
  }
}
