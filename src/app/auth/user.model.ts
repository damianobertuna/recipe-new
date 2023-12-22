export class User {
  constructor(
    public email: string,
    public id: string,
    public _token: string,
    public _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date().getTime() > this._tokenExpirationDate.getTime()) {
      return null;
    }
    return this._token;
  }
}
