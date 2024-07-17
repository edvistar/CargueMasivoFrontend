import { Component, OnInit } from '@angular/core';
import { Chair } from '../Interfaces/chair';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {
  title: string = 'Barber System';
  chairs: Chair[]=[];
  constructor(){}

  ngOnInit(): void {
    this.chairs = this.GenerarSillas(4)
  }

  GenerarSillas(cantidad: number) {
    const sillas: Chair[] = [];
    for (let i = 1; i <= cantidad; i++) {
      sillas.push({
        id: i,
        name: `Chair ${i}`, // Usar comillas invertidas para interpolación
        picture: `../../assets/img/SillaBarbero.jpg` // Usar comillas invertidas aquí también
      });
    }
    return sillas;
  }
}
