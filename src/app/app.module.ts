import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { InterfaceComponent } from './components/interface/interface.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule }  from '@angular/common/http'
import { HoodService } from './services/hood.service';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    InterfaceComponent,
    NavbarComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [HoodService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
