import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../Material/material.module';
import { BtgRoutingModule } from './btg-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { AperturasComponent } from './componentes/aperturas/aperturas.component';
import { CancelacionesComponent } from './componentes/cancelaciones/cancelaciones.component';
import { HistorialComponent } from './componentes/historial/historial.component';

@NgModule({
  declarations: [
    HomeComponent,
    CrearCuentaComponent,
    AperturasComponent,
    CancelacionesComponent,
    HistorialComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    BtgRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
  ]
})
export class BtgModule { }
