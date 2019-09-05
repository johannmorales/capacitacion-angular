import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usuario : string = "";
  public status : boolean = false;

  public loginSuccess(data : any) {
    this.usuario = data.user;
    this.status = data.logged;
  }
}
