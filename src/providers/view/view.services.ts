import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {HeadersService} from '../headers';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViewserviceProvider {
  apiUrl : any;

  constructor(public http: Http, private _header:HeadersService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  get(url) {
    return new Promise((resolve, reject) => {

    this.apiUrl = this.config.urlApi + url;

      this.http.get(this.apiUrl, this._header.getJsonHeaders())
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });

  }


}
