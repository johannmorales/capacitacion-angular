import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthPipe } from 'src/pipes/password-strength.pipe';


@NgModule({
  declarations: [LoginComponent, PasswordStrengthPipe,PasswordStrengthPipe],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModuleModule { }
