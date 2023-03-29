import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public url = "http://localhost:5000";

  
  constructor(private http: HttpClient) { }
  
  public getRestApi(){
    return this.http.get(`${this.url}/candy`)
  }

  public getRestApiBuble(){
    return this.http.get(`${this.url}/buble`)
  }
}
