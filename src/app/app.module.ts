import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WaveDividerComponent } from './components/wave-divider/wave-divider.component';

@NgModule({
  declarations: [AppComponent, HamburgerMenuComponent, WaveDividerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
