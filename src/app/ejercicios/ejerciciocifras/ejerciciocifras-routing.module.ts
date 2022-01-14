import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjerciciocifrasPage } from './ejerciciocifras.page';

const routes: Routes = [
  {
    path: '',
    component: EjerciciocifrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjerciciocifrasPageRoutingModule {}
