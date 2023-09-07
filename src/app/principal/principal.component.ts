import { Component } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  locale = 'ru';

  lineChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [89, 34,43,54,28,74,93],
        label: 'Sales Percent'
      }
    ]
  }

  constructor( private localeService: BsLocaleService) {
    this.localeService.use(this.locale);
  }
}
