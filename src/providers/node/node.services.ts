import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {HeadersService} from '../headers';
import { APP_NODE, INodeConfig } from './node.config';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NodeserviceProvider {
  apiUrl : any;

  constructor(public http: Http, private _header:HeadersService, @Inject(APP_NODE) private nodeconfig: INodeConfig, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  Create(credentials) {

    this.apiUrl = this.config.urlApi + this.nodeconfig.addurl;

    return new Promise((resolve, reject) => {

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

    this.apiUrl = this.config.urlApi + this.nodeconfig.baseurl + id +'?_format=json';

      this.http.get(this.apiUrl, this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }

  update(id, credentials) {
        return new Promise((resolve, reject) => {

            this.apiUrl = this.config.urlApi + this.nodeconfig.baseurl + id;

            this.http.patch(this.apiUrl, JSON.stringify(credentials), this._header.getJsonHeaders())
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

  }

  deleteNode(id) {
        return new Promise((resolve, reject) => {

            this.apiUrl = this.config.urlApi + this.nodeconfig.baseurl + id;

            this.http.delete(this.apiUrl, this._header.getJsonHeaders())
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

  }


}
