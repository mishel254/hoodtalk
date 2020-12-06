import { NeighborhoodService } from './neighborhood-service/neighborhood.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { ShowNeighborhoodComponent } from './neighborhood/show-neighborhood/show-neighborhood.component';
// import { AddEditNeighborhoodComponent } from './neighborhood/add-edit-neighborhood/add-edit-neighborhood.component';




@NgModule({
  declarations: [
    AppComponent,
    NeighborhoodComponent,
    NavbarComponent,
    // ShowNeighborhoodComponent,
    // AddEditNeighborhoodComponent,

  ],
  imports: [
    // HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [NeighborhoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
