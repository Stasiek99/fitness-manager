import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {
  }
  loginUser(event: FormGroup): void {
    const { email, password } = event.value;
    this.authService.loginUser(email, password);
  }
}
