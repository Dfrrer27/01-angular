import {Component} from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body_component.html'
})

export class bodyComponent {

    mostrar = false;

    frase: any = {
        mensaje: 'Hola a todosssssssss',
        autor: 'Diego Ferrer'    
    };

    cursos: string[] = ['Programación Orientada a Objetos', 'Base de Datos', 'Calculo y Estadistica', 'Arquitectura de Computadoras'];

}