import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmisionRoutingModule } from './amision-routing.module';
import { HomeModule } from '../../shared/components/home.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AmisionRoutingModule,
    HomeModule
  ]
})
export class AmisionModule { }
