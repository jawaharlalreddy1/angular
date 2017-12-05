import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { McRes } from '../../models/common/mcres'
import { UUID } from 'angular2-uuid';


@Injectable()
export class EsbService {

  constructor(public http: HttpClient) { }

  getMcDetails(enterpriseitemid: string, enterpriseaccountid: string): Observable<McRes> {
    let username: string = 'Esbbpmst';
    let password: string = 'B@msE5b162T!';
    let uuid = UUID.UUID();
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));

    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

    return this.http.get<McRes>('https://esb-dev.dexmedia.com/enterprise/profiles/v1/user?enterpriseitemid=' + enterpriseitemid + '&enterpriseaccountid=' + enterpriseaccountid + '&format=json&transactionid=10389' + uuid, {
      headers: headers
    })
      .map(res => res)
  }
}
