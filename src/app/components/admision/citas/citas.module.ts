import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';

import { CitasComponent } from './citas.component'
import { AgendamedicaComponent } from './agendamedica/agendamedica.component'
import { PacientecitadosComponent } from './pacientescitados/pacientecitados.component'
import { ProgramacionComponent } from './programacion/programacion.component';



@NgModule({
  declarations: [AgendamedicaComponent,PacientecitadosComponent,ProgramacionComponent,CitasComponent],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
