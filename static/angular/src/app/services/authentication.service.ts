import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor() { }

    login(username: string, password: string) {
        /*return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });*/
        if(password == "test" && username =="test") {
          localStorage.setItem('currentUser', "123");
          return true;
        }
        return false;
    }

    isLoggedIn() {
      return localStorage.getItem("currentUser");
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
