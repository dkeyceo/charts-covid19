import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  covURL = 'https://pomber.github.io/covid19/timeseries.json';

  constructor(private http: HttpClient) { }

  public getAll():Observable<any> {
    return this.http.get<any>(this.covURL);
  }

  public fromCountry(country: string){
    return this.getAll().pipe(map(data => data[country]));
  }

  public twoDates(country: string, dateFrom: Date, dateTo: Date){
    return this.fromCountry(country).pipe(map(res =>
      res.filter(val => new Date(val.date) >= dateFrom && new Date(val.date) <= dateTo)));
  }
}
