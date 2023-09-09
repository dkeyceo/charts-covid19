import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  locale = 'ru';
  countries: string[] = [];

  country: string;

  lineChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [89, 34,43,54,28,74,93],
        label: 'Sales Percent'
      },
      {
        data: [12, 11,9,32,22,14,23],
        label: 'Supply Percent'
      }
    ]
  }

  constructor( private localeService: BsLocaleService,
    private covidService: CovidService) {
    this.localeService.use(this.locale);
  }

  ngOnInit(): void {
    this.getCountries();
    // this.covidService.fromCountry('Spain').subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )
    // this.covidService.twoDates('Ukraine', new Date('2021-1-22'), new Date('2021-1-23'))
      // .subscribe(data => console.log(data));
  }

  getCountries(): void {
    this.covidService.getAll().subscribe(
      data => {
        this.countries = Object.keys(data);
        // console.log(this.countries);
      }
    )
  }
}
