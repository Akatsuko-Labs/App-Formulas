import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Ejercicio from '../ejercicios/ejercicioctc/ejercicio';

@Component({
  selector: 'app-pantalla-formulas',
  templateUrl: './pantalla-formulas.page.html',
  styleUrls: ['./pantalla-formulas.page.scss'],
})
export class PantallaFormulasPage implements OnInit {

  public lista: Ejercicio[] = [
    {
      ruta: "ejercicioctc",
      nombre: "Ejercicio: Circulo, Triangulo y Cuadrado"
      
    },
    {
      ruta: "monedas",
      nombre: "Conversion monedas"
    },
    {
      ruta:"ejerciciocifras",
      nombre: "Ejercicio Cifras"
    }
  ]

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void { }

  public navegarHacia(ruta: string): void{
    this.router.navigateByUrl(ruta)
  }

}
