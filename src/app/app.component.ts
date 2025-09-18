import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "nick";
  token:any = "";
  refresh_token:any = "";
  id_token:any = "";

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.name).subscribe(
      res => this.token = res
    );
  }

  loginKeyCloak() {
    // this.loginService.loginKeyCloak().subscribe(
    //   res => console.log(res)
    // );
    let win = window.open("http://192.168.1.5:8080/api/login", '_blank', 'resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=600,');

    if (win) {
      window.addEventListener("message", (event) => {
        let response = event.data;

        if (event.origin !== "http://192.168.1.5:8080") return;
        console.log("RECEIVED MESSAGE:")
        console.log(event);

        this.token = response.access_token;
        this.refresh_token = response.refresh_token;
        this.id_token = response.id_token;

        win.close();
      });
    }
  }

  logoutKeyCloak() {
    this.loginService.logout(this.token, this.id_token).subscribe();
  }
}
