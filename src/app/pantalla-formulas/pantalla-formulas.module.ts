import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaFormulasPageRoutingModule } from './pantalla-formulas-routing.module';

import { PantallaFormulasPage } from './pantalla-formulas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaFormulasPageRoutingModule
  ],
  declarations: [PantallaFormulasPage]
})
export class PantallaFormulasPageModule {}
