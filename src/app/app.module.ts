import { ViewComponent } from './view/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingsComponent } from './bookings/bookings.component';
import {RouterModule} from '@angular/router';

import { AppRoutes } from './app.routes.module';
import { from } from 'rxjs';
import { EventComponent } from './event/event.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BookingsComponent,
    ViewComponent,
    EventComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
 FormsModule,
 RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
