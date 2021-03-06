import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../shared/components/home/home.component'

const routes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    children:[{
      path:'citas',
      loadChildren:()=> import('./citas/citas.module').then(m=>m.CitasModule)
    }]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmisionRoutingModule { }
