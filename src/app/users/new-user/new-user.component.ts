import { Component } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
    userForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        age: new FormControl(''),
        email: new FormControl(''),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl('')
      })
  });

    submitted = false;

    handleSubmit() {
      this.submitted = true;
    }

}
