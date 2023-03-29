import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private wheaterService: WeatherService) {}

  ngOnInit(): void {
    this.getResponseCandy()
    this.getResponseBuble();
  }

  getResponseCandy() {
    this.wheaterService.getRestApi().subscribe((responseSuccess: any) => {
      console.log(responseSuccess)
    })  
  }

  getResponseBuble() {
    this.wheaterService.getRestApiBuble().subscribe((responseSuccess: any) => {
      console.log(responseSuccess)
    })  
  }
}

