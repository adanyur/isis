import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitasComponent } from './citas/citas/citas.component'
import { PacientecitadosComponent } from './citas/pacientescitados/pacientecitados.component';

const routes: Routes = [
  {
    path:'',component: CitasComponent,
    children:[{
      path:'',
        children:[{
          path:'pacientes-citados',component:PacientecitadosComponent
        }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmisionRoutingModule { }
