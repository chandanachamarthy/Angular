import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { MaterialModule } from './material/material.module';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { FormsModule } from '@angular/forms';
import { FeedbackBoxComponent } from './pages/testimonial/feedback-box/feedback-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TestimonialComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    FeedbackBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
