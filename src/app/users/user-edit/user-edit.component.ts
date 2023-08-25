import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  user: User = new User(11, 'Seth', 35,'me@example.com', '123 Congress Street', 'York', 'SC')

  submitted = false;

  constructor(private router: Router, private userService: UserService) { }

  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    this.userService.updateUser(this.user);

    this.router.navigate(['/user']);
  }
}
