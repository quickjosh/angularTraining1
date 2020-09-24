import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';

// This is a type
// This is an array of routes
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},

{ path: 'signup', component: SignupComponent},
];
// This is a decorator
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
