import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelterComponent } from './shelter/shelter.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  { path: '', component: ShelterComponent },
  { path: ':id', component: ShelterDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelterRoutingModule { }
