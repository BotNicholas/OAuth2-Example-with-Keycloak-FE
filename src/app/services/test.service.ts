import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  val: any = Math.random();
  subj: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public getVal() {
    return this.val;
  }

  public testInit() {
    alert("test init");
    setTimeout(() => { alert("sent");
      this.subj.next(true); }, 5000);
  }

  public getActivation() {
    setTimeout(() => { alert("sent");
      this.subj.next(true); }, 5000);
  }

  public getDeActivation() {
    setTimeout(() => { this.subj.next(false); }, 5000);
  }
}
