import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WaveDividerComponent } from './components/wave-divider/wave-divider.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './components/about/about.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { CallComponent } from './components/call/call.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerMenuComponent,
    WaveDividerComponent,
    ContactComponent,
    TitleComponent,
    AboutComponent,
    HeaderComponent,
    CallComponent,
    WelcomeComponent,
    TeamComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
