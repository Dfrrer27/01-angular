import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  //creamos una propiedad year de tipo number y cuando se inicialize el Footer.Component va a llamar al constructor y el constructor lo que hara es que la propiedad año va a tener el año actual de mi equipo.
  year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

}
