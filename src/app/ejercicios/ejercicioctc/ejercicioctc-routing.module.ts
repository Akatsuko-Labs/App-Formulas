import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioctcPage } from './ejercicioctc.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioctcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioctcPageRoutingModule {}
