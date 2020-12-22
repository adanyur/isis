import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmisionRoutingModule } from './amision-routing.module';

import { AgendamedicaComponent } from './citas/agendamedica/agendamedica.component';
import { PacientecitadosComponent } from './citas/pacientescitados/pacientecitados.component'
import { ProgramacionComponent } from './citas/programacion/programacion.component';
import { CitasComponent } from './citas/citas/citas.component';



@NgModule({
  declarations: [AgendamedicaComponent,PacientecitadosComponent,ProgramacionComponent, CitasComponent],
  imports: [
    CommonModule,
    AmisionRoutingModule
  ]
})
export class AmisionModule { }
