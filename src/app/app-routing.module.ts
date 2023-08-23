import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelterComponent } from './shelter/shelter.component';
import { HomeComponent } from './home/home.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shelter', component: ShelterComponent },
  { path: 'shelter/:id', component: ShelterDetailComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
