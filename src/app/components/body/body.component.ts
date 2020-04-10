import {Component} from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Perdona a tus enemigos , pero no olvides sus nombres.',
        autor: 'JFK'

    };

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octupus'];

}