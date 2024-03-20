import { Component, OnInit } from '@angular/core';
import { WeathersService } from '../weathers.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myweather: any;
  cityname: any;
  temperature: number = 0;
  mintemp: number = 0;
  maxtemp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  city: string = 'Buxar';
  sunset: number = 0;
  sunrise: number = 0;
  description : any; 
  currenttime: number = 0;
  day2: number = 0;
  day3: number = 0;
  day4: number = 0;
  day5: number = 0;
  foredate2: any;
  foredate3: any;
  foredate4: any;
  foredate5: any;
  now = new Date()
  constructor(private weathersService: WeathersService) {
   
  }
  ngOnInit(): void {

    this.getweather(this.city);
    this.city = '';
  }


  onSubmit() {
    this.getweather(this.city)
    this.city = '';

  }
  private getweather(city: string)
{
  this.weathersService.getweather(city).subscribe({

    next: (res) => {
      this.myweather = res;
      console.log(res)
      console.log(this.myweather);
      console.log(this.now)
      this.cityname = this.myweather.name;
      this.temperature = this.myweather.main.temp;
      this.mintemp = this.myweather.main.temp_min;
      this.maxtemp = this.myweather.main.temp_max;
      this.humidity = this.myweather.main.humidity;
      this.wind = this.myweather.wind.speed;
      this.sunset = this.myweather.sys.sunset;
      this.sunrise = this.myweather.sys.sunrise;
      this.currenttime = this.myweather.coord.dt;
      this.description =this.myweather.weather[0].description;
    },

    complete: () => console.log('API call Success')

  })
  this.weathersService.getweathernextdays(city).subscribe({
    next: (res) => {
      this.myweather = res;
      console.log(res)
      this.day2 = this.myweather.list[1].main.temp
      this.day3 = this.myweather.list[2].main.temp
      this.day4 = this.myweather.list[3].main.temp
      this.day5 = this.myweather.list[4].main.temp
      this.foredate2 = this.myweather.list[4].dt_txt;
      this.foredate3 = this.myweather.list[12].dt_txt;
      this.foredate4 = this.myweather.list[20].dt_txt;
      this.foredate5 = this.myweather.list[29].dt_txt;
    },
  })
}
getCurrentDateTime(): string {
  const currentDateTime = new Date();
  return currentDateTime.toDateString() ;
}
}
// 
// + ' ' + currentDateTime.toLocaleTimeString()
//      _                      _                 ____ _     ___ 
//     / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
//    / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | | 
//   / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | | 
//  /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
//                 |___/