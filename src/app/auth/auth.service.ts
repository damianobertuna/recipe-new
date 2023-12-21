import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: number;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiKey = 'AIzaSyAogji-IX8pVoUgFnbmqcn-OGKXipZZPu4';
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apiKey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleErrorMessage));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.apiKey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        )
      }),
      catchError(this.handleErrorMessage));
  }

  private handleAuthentication(email: string, id: number, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      id,
      token,
      expiresIn);
    this.user.next(user);
  }

  private handleErrorMessage(errorResp: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResp.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid email or password';
        break;
    }

    return throwError(errorMessage);
  }
}
