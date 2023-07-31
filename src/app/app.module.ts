import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { TermsAndConditionsComponent } from './register/terms-and-conditions/terms-and-conditions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoutesComponent } from './routes/routes.component';
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './vendors/services.component';
import { ProfileComponent } from './profile/profile.component';
import { VendorCardComponent } from './vendors/vendor-card/vendor-card.component';
import { VendorPageComponent } from './vendors/vendor-page/vendor-page.component';
import { EventCardComponent } from './events/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SignInPageComponent,
    TermsAndConditionsComponent,
    RegisterComponent,
    RoutesComponent,
    EventsComponent,
    ServicesComponent,
    ProfileComponent,
    VendorCardComponent,
    VendorPageComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
