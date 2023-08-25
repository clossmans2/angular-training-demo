import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();

  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.user = user);
  }
  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    this.userService.updateUser(this.user);
    this.router.navigate(['/user']);
  }
}
