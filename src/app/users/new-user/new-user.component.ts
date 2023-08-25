import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  // userForm = new FormGroup({
  //     id: new FormControl(''),
  //     name: new FormControl(''),
  //     age: new FormControl(''),
  //     email: new FormControl(''),
  //     address: new FormGroup({
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl('')
  //   })
  // });
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }
  userForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.max(100)]],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    })
  });

  submitted = false;

  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    let user: User = new User(
        this.userForm.value.id as unknown as number,
        this.userForm.value.name as unknown as string,
        this.userForm.value.age as unknown as number,
        this.userForm.value.email as unknown as string,
        this.userForm.value.address?.street as unknown as string,
        this.userForm.value.address?.city as unknown as string,
        this.userForm.value.address?.state as unknown as string);
    this.userService.createUser(user);
    this.router.navigate(['/user']);
  }

}
