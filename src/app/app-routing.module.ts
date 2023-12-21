import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationConfig } from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '' ,component: WeatherComponent}, 
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
