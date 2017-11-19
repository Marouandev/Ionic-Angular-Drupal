import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeadersService {

  constructor(){}

  getJsonHeaders(token?:string){
    var headers = new Headers();
    headers.append('Content-Type', '*');
    headers.append('Accept', 'application/json');
    if (token)
    headers.append('x-access-token',token)
    return {headers: headers};
  }

}
