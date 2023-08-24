import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { ObservableInput, Subscription } from 'rxjs';
import { UserService } from '../users/user.service';
import { ReverseStrPipe } from '../shared/reverse-str.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  catUrl: string = 'https://cataas.com/cat';
  isActive: boolean = false;
  fontColor: string = 'blue';
  bgColor: string = 'yellow';
  showGreeting: boolean = false;
  evenNumbers: number[] = [2, 4, 6, 8, 10];
  newUsers!: User[];
  // user!: User;
  price: number = 9.4156;

  today: number = Date.now();

  private subscription!: Subscription;

  constructor(private http: HttpClient, private userService: UserService) {
    this.subscription = this.userService.getUsers().subscribe(
      users => this.newUsers = users,
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }

  handleError(err: any): ObservableInput<any> {
    throw new Error('Something happened in the subscription', err.message);
  }

  toggleActive(){
    this.isActive = !this.isActive;
  }

  handleUserEvent(user: User){
    console.log(user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    //console.log('User Component: ', this.userComponent);
    /// Use the ChangeDetectorRef service's detectChanges() method to trigger change detection
  }
}
