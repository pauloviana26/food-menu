import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'pratos',
    loadChildren: () => import('./pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'pratododia',
    loadChildren: () => import('./pratododia/pratododia.module').then( m => m.PratododiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
