import { SeoData } from './../../models/seo/seoData';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Taskres } from '../../models/taskres';

@Injectable()
export class TitanService {

  constructor(public http: HttpClient) { }

  getAssignedTasks(user: string): Observable<Taskres> {


    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';

    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      )
    );


    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

    return this.http.get<Taskres>('https://localhost:3000/seo/get/bpmsTasks/processDefinitionName/SampleProject/assignee/' + user, {
      headers: headers
    })
      .map(res => res
      )

  }


  getSeodata(enterPriseItemId: string): Observable<SeoData> {
    
    
        let username: string = 'ESB';
        let password: string = 'BdL5C35jwNC2K6Vs';
    
        let headers = new HttpHeaders().set(
          'Authorization', 'Basic ' + btoa(username + ":" + password
          )
        );
    
    
        headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers = headers.append('Access-Control-Allow-Credentials', 'true');
        headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    
        return this.http.get<SeoData>('https://localhost:3000/seo/get/seoproduct/enterpriseItemId/' + enterPriseItemId, {
          headers: headers
        })
          .map(res => res
          )
    
      }


}
