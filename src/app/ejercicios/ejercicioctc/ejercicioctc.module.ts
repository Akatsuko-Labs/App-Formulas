import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioctcPageRoutingModule } from './ejercicioctc-routing.module';

import { EjercicioctcPage } from './ejercicioctc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioctcPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EjercicioctcPage]
})
export class EjercicioctcPageModule {}
