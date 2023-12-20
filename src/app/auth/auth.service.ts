import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expireIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAogji-IX8pVoUgFnbmqcn-OGKXipZZPu4',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorResp => {
        let errorMessage = 'An error occurred';
        if (!errorResp.error || !errorResp.error.error) {
          return throwError(errorMessage);
        }

        switch (errorResp.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'Thie email already exists';
        }

        return throwError(errorMessage);
      })
    );
  }
}
