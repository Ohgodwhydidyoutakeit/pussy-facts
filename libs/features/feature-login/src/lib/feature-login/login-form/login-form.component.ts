import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslocoDirective } from '@jsverse/transloco';
import { LoginFormGroup } from '../domain/login-form.interface';
import { loginPasswordValodators } from '../domain/login-validators';
import { MatButtonModule } from '@angular/material/button';
import { AuthFacade } from '@pussy-facts/auth'

@Component({
  selector: 'feature-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, TranslocoDirective, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  readonly #fb = inject(UntypedFormBuilder);
  readonly #authFacade = inject(AuthFacade);
  form!: FormGroup<LoginFormGroup>;

  ngOnInit(): void {
    this.initFormGroup()
  }

  initFormGroup(): void {
    this.form = this.#fb.nonNullable.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, ...loginPasswordValodators]]
    })
  }

  submitLoginForm(): void {
    if (this.form.invalid) {
      return
    }
    
    this.#authFacade.logIn({
      login: this.form.controls.login.value,
      password: this.form.controls.password.value,
    })
  }
}
