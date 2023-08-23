import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        name: "Marisha",
        email: "makeup1837@duck.com",
        age: 25,
        address: {
          street: "Sloat",
        city: "Davie",
        state: "New Hampshire"
        }
      },
      {
        id: 2,
        name: "Ernie",
        email: "guests2075@duck.com",
        age: 51,
        address:{
          street: "San Lorenzo",
          city: "Reading",
          state: "Ohio"
        }
      },
      {
        id: 3,
        name: "Eddy",
        email: "scratch2009@protonmail.com",
        age: 25,
        address:{
          street: "Orizaba",
          city: "Mundelein",
          state: "Wyoming"
        }
      },
      {
        id: 4,
        name: "Simon",
        email: "memorial1818@live.com",
        age: 56,
        address:{
          street: "Santa Cruz",
          city: "Edmonds",
          state: "Alabama"
        }
      },
      {
        id: 5,
        name: "Clotilde",
        email: "belongs2003@yandex.com",
        age: 47,
        address:{
          street: "Wentworth",
          city: "Jamestown",
          state: "Arkansas"
        }
      },
      {
        id: 6,
        name: "Bob",
        email: "historical1849@yahoo.com",
        age: 49,
        address:{
          street: "Macondray",
          city: "Addison",
          state: "Vermont"
        }
      },
      {
        id: 7,
        name: "Coretta",
        email: "command2092@example.com",
        age: 16,
        address:{
          street: "Rivas",
          city: "Sahuarita",
          state: "Iowa"
        }
      },
      {
        id: 8,
        name: "King",
        email: "curtis2040@gmail.com",
        age: 63,
        address:{
          street: "Silliman",
          city: "Shreveport",
          state: "Indiana"
        }
      },
      {
        id: 9,
        name: "Vernon",
        email: "quality2005@example.com",
        age: 63,
        address:{
          street: "Lori",
          city: "Desert Hot Springs",
          state: "Montana"
        }
      },
      {
        id: 10,
        name: "Jeremy",
        email: "gmbh1981@duck.com",
        age: 49,
        address:{
          street: "Constanso",
          city: "Lake Oswego",
          state: "Kansas"
        }
      }
    ];
    return {users};
  }
}
