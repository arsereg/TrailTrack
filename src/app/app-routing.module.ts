import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoaderComponent} from "./loader/loader.component";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";
import {RegisterComponent} from "./register/register.component";
import {RoutesComponent} from "./routes/routes.component";
import {EventsComponent} from "./events/events.component";
import {ServicesComponent} from "./vendors/services.component";
import {ProfileComponent} from "./profile/profile.component";
import {VendorPageComponent} from "./vendors/vendor-page/vendor-page.component";
import {MapComponent} from "./map/map.component";
import {EventPageComponent} from "./events/event-page/event-page.component";
import {LogInComponent} from "./log-in/log-in.component";

const routes: Routes = [
  { path: '', component: LoaderComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'vendor/:id/:name/:description/:phoneNumber/:whatsapp/:image', component: VendorPageComponent },
  { path: 'map', component: MapComponent},
  { path: 'event/:id/:name/:description/:phoneNumber/:whatsapp/:image', component: EventPageComponent },
  { path: 'login', component: LogInComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
