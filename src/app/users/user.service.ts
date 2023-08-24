import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersUrl: string = `${environment.apiUrl}users`; // 'api/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }

    getUser(id: number): Observable<User> {
      return this.http.get<User>(`${this.usersUrl}/${id}`);
    }

    createUser(user: User): Observable<User> {
      return this.http.post<User>(this.usersUrl, user);
    }

    updateUser(user: User): Observable<User> {
      return this.http.put<User>(`${this.usersUrl}/${user.id}`, user);
    }

    deleteUser(id: number): Observable<User> {
      return this.http.delete<User>(`${this.usersUrl}/${id}`);
    }
}
