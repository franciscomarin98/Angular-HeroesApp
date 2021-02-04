import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VerHeroeComponent } from './pages/ver-heroe/ver-heroe.component';
import { HomeHeroeComponent } from './pages/home-heroe/home-heroe.component';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';
import { HeoreRoutingModule } from './heore-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    VerHeroeComponent,
    HomeHeroeComponent,
    ListHeroeComponent
  ],
  imports: [
    CommonModule,
    HeoreRoutingModule,
    FlexLayoutModule,
    MaterialDesignModule
  ]
})
export class HeroeModule { }
