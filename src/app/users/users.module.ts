import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService],
  exports: [UserComponent]
})
export class UsersModule {}
