import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  title = 'shelter-network';
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: '/users'
      },
      {
        label: 'Shelters',
        icon: 'pi pi-fw pi-building',
        routerLink: '/shelters'
      }
    ];
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
