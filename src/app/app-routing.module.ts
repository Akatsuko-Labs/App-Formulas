import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pantalla-formulas',
    pathMatch: 'full'
  },
  {
    path: 'pantalla-formulas',
    loadChildren: () => import('./pantalla-formulas/pantalla-formulas.module').then( m => m.PantallaFormulasPageModule)
  },
  {
    path: 'ejercicioctc',
    loadChildren: () => import('./ejercicios/ejercicioctc/ejercicioctc.module').then( m => m.EjercicioctcPageModule)
  },
  {
    path: 'monedas',
    loadChildren: () => import('./ejercicios/monedas/monedas.module').then( m => m.MonedasPageModule)
  },
  {
    path: 'ejerciciocifras',
    loadChildren: () => import('./ejercicios/ejerciciocifras/ejerciciocifras.module').then( m => m.EjerciciocifrasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
