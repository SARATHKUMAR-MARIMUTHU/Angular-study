import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLogoComponent } from './footer/footer-logo/footer-logo.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderlogoComponent } from './headerlogo.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    FooterLogoComponent,
    HeaderlogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
