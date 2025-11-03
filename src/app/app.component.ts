import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import {TestService} from './services/test.service';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  // providers: [TestService] <-- this will create a local copy for this component
})
export class AppComponent {
  isReady = false;

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.testService.subj.subscribe(res => this.isReady = res);
    // this.testService.subj.pipe(filter(res => res), map(res => res)).subscribe(res => console.log(res));
  }
}
