import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';
import { Role } from 'src/app/core/user/model/role';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fgLogin: FormGroup;
  loading: boolean = false;
  hide = true;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.fgLogin = this._formBuilder.group({
      fcUsername: ['', Validators.required],
      fcPassword: ['', Validators.required]
    });
  }

  authenticateUser() {

    this.loading = true;

    let username = this.fgLogin.get('fcUsername')?.value;
    let password = this.fgLogin.get('fcPassword')?.value;

    this.authService.login(username, password)
      .pipe(
        finalize(() => {
          this.loading = false;
        }))
      .subscribe(token => {

        if (token.token) {
          switch (this.userService.getRole()) {

            case Role.admin:
              this.router.navigate(['/admin-leilao'])
              break;
            case Role.user:
              this.router.navigate(['/user-leilao'])
              break;
            default:
              break;
          }
        }

      })
  }

  onSubmit() {
    this.authenticateUser();
  }

}
