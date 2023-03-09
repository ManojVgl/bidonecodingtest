import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';
import { environment } from '../../enviornment/environment';

const  baseUrl= environment.API_URL;
@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(baseUrl);
  }

 
  create(data: any): Observable<any> {
    console.log('I am here data ',data )
    console.log('base url is ',baseUrl )
    return this.http.post(baseUrl, data,{responseType: 'text'});
  }

  
}
