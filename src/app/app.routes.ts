import { Routes } from '@angular/router';
import {AppComponent1} from './components/app1.component';
import {canActivate} from './Guards/CanActivate';
import {HomeComponent} from './components/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "guard", component: AppComponent1, canActivate: [canActivate] },
];
