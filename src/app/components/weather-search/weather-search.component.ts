import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  searchByCity(city: string) {
    this.weatherService.getWeatherByCity(city).subscribe(data => this.weather = data);
  }

  searchByZip(zip: string) {
    this.weatherService.getWeatherByZip(zip).subscribe(data => this.weather = data);
  }

  searchByCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.weatherService.getWeatherByCoordinates(position.coords.latitude, position.coords.longitude)
          .subscribe(data => this.weather = data);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}

