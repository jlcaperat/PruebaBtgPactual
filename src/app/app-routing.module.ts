import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [
    {
      path:'btg',
      loadChildren: () => import('./btgPactual/btg.module').then( m => m.BtgModule ),    
    },
    {
      path:'',
      redirectTo: 'btg',
      pathMatch:'full'    
    },
    {
      path: '**',
      redirectTo:'btg'
    }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
