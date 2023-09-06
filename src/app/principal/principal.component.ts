import { Component } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  locale = 'ru';

  constructor( private localeService: BsLocaleService) {
    this.localeService.use(this.locale);
  }
}
