import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonedasPageRoutingModule } from './monedas-routing.module';

import { MonedasPage } from './monedas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonedasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MonedasPage]
})
export class MonedasPageModule {}
