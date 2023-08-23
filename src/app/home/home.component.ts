import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable, ObservableInput, Subscription, catchError } from 'rxjs';
import { DataService } from '../data-service.service';
import { UserComponent } from '../user/user.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('userRef') userComponent!: UserComponent;
  private subscription!: Subscription;
  // usersUrl: string = 'api/users';
  myUser: User;
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

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }

  constructor(private http: HttpClient, private userService: UserService) {
    this.subscription = this.userService.getUsers().subscribe(
      users => this.newUsers = users,
      err => console.log(err)
    );
    this.myUser = new User(15,'Seth', 35, 'sclossman@skillstorm.com', '123 Main St', 'Orlando', 'FL');
  }

  handleError(err: any): ObservableInput<any> {
    throw new Error('Something happened in the subscription', err.message);
  }

  toggleActive(){
    this.isActive = !this.isActive;
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.usersUrl);
  // }

  handleUserEvent(user: User){
    console.log(user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log('User Component: ', this.userComponent);
    /// Use the ChangeDetectorRef service's detectChanges() method to trigger change detection
  }
}
