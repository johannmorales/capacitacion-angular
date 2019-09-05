import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginData } from "./login-data";
import { PasswordStrengthPipe } from 'src/pipes/password-strength.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ PasswordStrengthPipe ]
})
export class LoginComponent implements OnInit {

  @Output()
  loginSuccess : EventEmitter<LoginData> = new EventEmitter<LoginData>();

  public loginForm: FormGroup;

  public message : string = "";

  constructor(private __builder: FormBuilder, private pipe :PasswordStrengthPipe) { 
    this.loginForm = this.__builder.group({
      user: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null, Validators.required)  
    })
  }

  ngOnInit() {
    console.log(this.pipe.transform("asdasd"));
  }

  public doLogin(e : any) {
    let body = {
      user: this.loginForm.controls['user'].value,
      logged: true,
    }
    this.loginSuccess.emit(body);
    this.message = "Login exitoso";
  }
}
