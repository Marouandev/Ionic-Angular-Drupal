import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {HeadersService} from '../headers';
import { APP_USER, IUserConfig } from './user.config';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';

/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserserviceProvider {
  apiUrl : any;

  constructor(public http: Http, private _header:HeadersService, @Inject(APP_USER) private userconfig: IUserConfig, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  Register(credentials) {

    this.apiUrl = this.config.urlApi + this.userconfig.urlregister;

    return new Promise((resolve, reject) => {

      this.http.post(this.apiUrl, JSON.stringify(credentials), this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }

  Login(credentials) {
    return new Promise((resolve, reject) => {

    this.apiUrl = this.config.urlApi + this.userconfig.urlLogin;

      this.http.post(this.apiUrl, JSON.stringify(credentials), this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {

    this.apiUrl = this.config.urlApi + this.userconfig.baseurl + id;

      this.http.get(this.apiUrl, this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }

  logout() {
    return new Promise((resolve, reject) => {

    this.apiUrl = this.config.urlApi + this.userconfig.urlLogout;

      this.http.get(this.apiUrl, this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }

  Update(credentials) {
    return new Promise((resolve, reject) => {

    this.apiUrl = this.config.urlApi + this.userconfig.baseurl + id;

      this.http.patch(this.apiUrl, JSON.stringify(credentials), this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  Token() {
    return new Promise((resolve, reject) => {

    this.apiUrl = this.config.urlApi + this.userconfig.urltoken;

      this.http.get(this.apiUrl, this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }

}
