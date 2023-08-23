import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shelter-network';
  constructor(private router: Router) { }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
