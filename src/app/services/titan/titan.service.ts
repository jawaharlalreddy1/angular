import { SeoData } from './../../models/seo/seoData';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Taskres } from '../../models/taskres';
import { NotesRes } from '../../models/common/notesRes';
import { TaskHistoryHeader } from '../../models/common/taskHistoryHeader';

@Injectable()
export class TitanService {

  constructor(public http: HttpClient) { }

  getAssignedTasks(user: string, assigned: boolean): Observable<Taskres> {

    let req: string
    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));

    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    if (assigned) {
      req = '&assignee=' + user + '&assigned=true';
    } else {
      req = '&unassigned=true';
    }
    return this.http.get<Taskres>('https://localhost:3000/seo/get/bpmsTasks/processDefinitionName/?processDefinitionName=SampleProject' + req, {
      headers: headers
    })
      .map(res => res)
  }

  getSeodata(enterPriseItemId: string): Observable<SeoData> {

    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));

    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

    return this.http.get<SeoData>('https://localhost:3000/seo/get/seoproduct/enterpriseItemId/' + enterPriseItemId, {
      headers: headers
    })
      .map(res => res)
  }

  getNotes(enterPriseItemId: string): Observable<NotesRes> {

    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));

    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

    return this.http.get<NotesRes>('https://localhost:4000/common/retrievenotes/enterpriseItemId/' + enterPriseItemId, {
      headers: headers
    })
      .map(res => res
      )
  }

  addNote(note) {
    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));

    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    console.log(note);
    console.log(JSON.stringify(note));
    return this.http.post('https://localhost:4000/common/post/instanceNotes', JSON.stringify(note), {
      headers: headers
    })
      .map(res => res
      )
  }



  getTaskHistory(enterPriseItemId: string): Observable<TaskHistoryHeader> {

    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));

    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

    return this.http.get<TaskHistoryHeader>('https://localhost:4000/common/retrievetaskhistory/enterpriseItemId/' + enterPriseItemId, {
      headers: headers
    })
      .map(res => res
      )
  };

}