import { Component, OnInit } from '@angular/core';
import { WeathersService } from '../weathers.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myweather: any;
  temperature: number = 0;
  mintemp: number = 0;
  maxtemp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  city: string = 'London';
  sunset: number = 0;
  sunrise: number = 0;
  currenttime: number = 0;


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
      this.temperature = this.myweather.main.temp;
      this.mintemp = this.myweather.main.temp_min;
      this.maxtemp = this.myweather.main.temp_max;
      this.humidity = this.myweather.main.humidity;
      this.wind = this.myweather.wind.speed;
      this.sunset = this.myweather.sys.sunset;
      this.sunrise = this.myweather.sys.sunrise;
      this.currenttime = this.myweather.coord.dt;

    },

    complete: () => console.log('API call Success')

  })
  this.weathersService.getweathernextdays(city).subscribe({

  })
}
}
