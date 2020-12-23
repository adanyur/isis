import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasComponent } from './citas.component'
import { PacientecitadosComponent } from './pacientescitados/pacientecitados.component'
import { AgendamedicaComponent } from './agendamedica/agendamedica.component'
import { ProgramacionComponent } from './programacion/programacion.component'

const routes: Routes = [
{
  path: '',
  component: CitasComponent,
  children: [
    {path: 'pacientescitados',component:PacientecitadosComponent},
    {path:'agendamedica',component:AgendamedicaComponent},
    {path:'programacion',component:ProgramacionComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
