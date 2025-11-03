import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  providers: [TestService]
})
export class HomeComponent {
  name = "nick";
  token:any = "";
  refresh_token:any = "";
  id_token:any = "";

  constructor(private loginService: LoginService, private testService: TestService) { }

  login() {
    this.loginService.login(this.name).subscribe(
      (res:any) => this.token = res
    );
  }

  ngOnInit() {
    console.log(this.loginService)
    console.log(this.testService.getVal())
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
