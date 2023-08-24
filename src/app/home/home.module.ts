import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HomeRoutingModule
    ],
    exports: [HomeComponent]
  })
export class HomeModule { }
