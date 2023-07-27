import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoaderComponent} from "./loader/loader.component";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '', component: LoaderComponent},
  { path: 'sign-in', component: SignInPageComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
