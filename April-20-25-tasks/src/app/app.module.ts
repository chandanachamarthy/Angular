import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';

import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { RangefilterPipe } from './pipes/rangefilter.pipe';
import { DetailsComponent } from './pages/home/details/details.component';
import { ViewreviewComponent } from './pages/home/viewreview/viewreview.component';
import { ReviewComponent } from './pages/home/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ComplaintComponent,
    ServiceBoxComponent,
    TypefilterPipe,
    RangefilterPipe,
    DetailsComponent,
    ViewreviewComponent,
    ReviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
