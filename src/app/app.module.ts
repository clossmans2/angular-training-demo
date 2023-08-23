import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data-service.service';
import { UserService } from './user.service';
import { HighlightDirective } from './highlight.directive';
import { ReverseStrPipe } from './reverse-str.pipe';
import { ShelterComponent } from './shelter/shelter.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    HighlightDirective,
    ReverseStrPipe,
    ShelterComponent,
    ShelterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
