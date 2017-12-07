import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CamundaService {

  constructor(public http: HttpClient) { }
claimTask(userId:string,taskId:string){
  
  let req= {"userId":userId};

  let headers = new HttpHeaders().set(
    'Access-Control-Allow-Origin', 'http://localhost:3000'
    );
  
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Access-Control-Allow-Credentials', 'true');
  headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

  return this.http.post('http://localhost:8080/engine-rest/task/' + taskId + '/claim',req, {
    headers: headers
  })
    .map(res => res)
}

completeTask(taskId:string){
  
  let headers = new HttpHeaders().set(
    'Access-Control-Allow-Origin', 'http://localhost:3000'
    );
  
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Access-Control-Allow-Credentials', 'true');
  headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

  return this.http.post('http://localhost:8080/engine-rest/task/' + taskId + '/complete', {
    headers: headers
  })
    .map(res => res)
}

}
