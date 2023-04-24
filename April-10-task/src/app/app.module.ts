import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodySpaceComponent } from './body-space/body-space.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodySpaceComponent,
    FooterAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
