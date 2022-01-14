import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.page.html',
  styleUrls: ['./monedas.page.scss'],
})
export class MonedasPage implements OnInit {

  
  //Variables calculos
  public formula: string = "";
  public resuelto: boolean = false;

  public dol: number;
  public pes: number;
  public conversion: string = "";


  //Variables pesos
  public conv: FormGroup;
 
  constructor(
    fb: FormBuilder
  ) 
  {
    this.conv = fb.group({
      pesosad: [null, [Validators.required]],
      dolarpe: [null, [Validators.required]],

    })
  }
  

  public ngOnInit(): void { }

  public cambiarFormula(evento): void{
    this.formula = evento.detail.value;
    this.reinicializar();
  }

  public calcularDolaresap(): void{
    const dol=20.3;
    const dolarpe = this.conv.value.dolarpe;
    this.conversion = ((dol*dolarpe)+"");
    this.resuelto = true;
  }

  public calcularPesosad(): void{
    const pes=.049;
    const pesosad = this.conv.value.pesosad;
    this.conversion= (pesosad*pes)+"";
    this.resuelto = true;
  }

  private reinicializar(): void {


    //reiniciar conv
    this.conv.reset();


    //Reiniciar globales
    this.resuelto = false; 
    this.conversion = "";
  }
}
