import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.email),
    password: new FormControl(null, Validators.required)
  })

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() {
    const control = this.form.get("password");
    return control?.hasError("required") && control?.touched;
  }

  get emailFormat() {
    const control = this.form.get("email");
    return control?.hasError("email") && control?.touched;
  }
}
