import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
  private API_KEY = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string) {
    return this.http.get(`${this.API_ENDPOINT}?q=${city}&appid=${this.API_KEY}`);
  }

  getWeatherByZip(zip: string) {
    return this.http.get(`${this.API_ENDPOINT}?zip=${zip}&appid=${this.API_KEY}`);
  }

  getWeatherByCoordinates(lat: number, lon: number) {
    return this.http.get(`${this.API_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`);
  }
}
