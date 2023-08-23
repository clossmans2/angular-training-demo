import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: User;
  @Output() userEvent = new EventEmitter<User>();

  sendUserEvent(user: User) {
    this.userEvent.emit(user);
  }

  ngOnInit(): void {
    console.log('UserComponent initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('user changed');
    for(let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      console.log(curVal, prevVal);
    }
  }
}
