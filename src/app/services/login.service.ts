import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) { }

  public login(user: string) {
    return this.client.get(`http://192.168.1.5:8080/login-with-google?user=${user}`, {responseType: 'text'});
  }

  public logout(accessToken: string, idToken: string) {
    return this.client.post(`http://192.168.1.5:8080/api/logout`, idToken, {headers: {Authorization: "Bearer " + accessToken}});
  }
}
