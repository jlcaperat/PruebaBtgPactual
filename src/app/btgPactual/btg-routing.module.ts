import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { HomeComponent } from './componentes/home/home.component';
import { AperturasComponent } from './componentes/aperturas/aperturas.component';
import { CancelacionesComponent } from './componentes/cancelaciones/cancelaciones.component';
import { HistorialComponent } from './componentes/historial/historial.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children:[
    {
      path:'crear',
      component:CrearCuentaComponent,
     },
     {
      path:'aperturas',
      component:AperturasComponent,
     },
     {
      path:'cancelacion',
      component:CancelacionesComponent,
     },
     {
      path:'historial',
      component:HistorialComponent,
     }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtgRoutingModule { }
