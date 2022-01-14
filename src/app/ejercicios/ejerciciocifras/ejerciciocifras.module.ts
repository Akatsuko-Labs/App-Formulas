import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjerciciocifrasPageRoutingModule } from './ejerciciocifras-routing.module';

import { EjerciciocifrasPage } from './ejerciciocifras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjerciciocifrasPageRoutingModule
  ],
  declarations: [EjerciciocifrasPage]
})
export class EjerciciocifrasPageModule {}
