import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeathersService {

  constructor(private http:HttpClient) { }
  getweather( city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=76c425f83d3dd4a696721e5d4d4cc3fe&units=metric');
  }
  getweathernextdays( city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' +city+ '&appid=76c425f83d3dd4a696721e5d4d4cc3fe&units=metric');
  }
}
