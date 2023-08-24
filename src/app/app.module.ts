import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { SheltersModule } from './shelters/shelters.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    /// Angular Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    /// App Modules
    HomeModule,
    UsersModule,
    SheltersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
