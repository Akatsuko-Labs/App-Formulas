import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicioctc',
  templateUrl: './ejercicioctc.page.html',
  styleUrls: ['./ejercicioctc.page.scss'],
})
export class EjercicioctcPage implements OnInit {

  //Variables generales
  public formula: string = "";
  public resuelto: boolean = false;
  public resultado: string = "";
  public unidad: string = "";

  //Variables para circulo
  public radio: number = null;

  //Variables para Triangulo
  public formularioT: FormGroup;

  //Variables para cuadrado
  public lado: number = null;

  constructor(
    fb: FormBuilder
  ) {
    this.formularioT = fb.group({
      base: [null, [Validators.required]],
      altura: [null, [Validators.required]],
    })
  }

  public ngOnInit(): void { }

  public cambiarFormula(evento): void{
    this.formula = evento.detail.value;
    this.reinicializar();
  }

  public calcularCirculo(): void{
    this.resultado = (Math.pow(this.radio, 2) * Math.PI).toFixed(2);
    this.resuelto = true;
  }

  public calcularTriangulo(): void {
    const base = this.formularioT.value.base;
    const altura = this.formularioT.value.altura;
    this.resultado = (( base * altura ) / 2 ).toFixed(2);
    this.resuelto = true;
  }

  public calcularCuadrado(): void {
    this.resultado = (Math.pow(this.lado, 2)).toFixed(2);
    this.resuelto = true;
  }

  private reinicializar(): void {
    //Reiniciar circulo
    this.radio = null;

    //Reiniciar triangulo 
    this.formularioT.reset();

    //Reiniciar cuadrado
    this.lado = null;

    //Reiniciar globales
    this.unidad = "";
    this.resuelto = false; 
    this.resultado = "";
  }

}
