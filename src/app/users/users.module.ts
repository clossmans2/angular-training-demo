import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { UserEditComponent } from './user-edit/user-edit.component';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    NewUserComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    UserRoutingModule
  ],
  providers: [UserService],
  exports: [UserComponent, UserListComponent, NewUserComponent, UserEditComponent]
})
export class UsersModule {}
