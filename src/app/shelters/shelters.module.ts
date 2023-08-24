import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelterComponent } from './shelter/shelter.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { ShelterRoutingModule } from './shelters-routing.module';



@NgModule({
  declarations: [
    ShelterComponent,
    ShelterDetailComponent,

  ],
  imports: [
    CommonModule,
    ShelterRoutingModule
  ],
  exports: [ShelterComponent, ShelterDetailComponent]
})
export class SheltersModule { }
