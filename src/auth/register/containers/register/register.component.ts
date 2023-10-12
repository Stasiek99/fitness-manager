import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private authService: AuthService) {
  }
  registerUser(event: FormGroup): void {
    const { email, password } = event.value;
    this.authService.createUser(email, password);
  }
}
