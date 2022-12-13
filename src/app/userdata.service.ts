import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  getData(){
    let apiurl="http://localhost:8080/api/server";
    return this.http.get(apiurl);
  }
  
}
