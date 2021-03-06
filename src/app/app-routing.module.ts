import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListComponent } from './vehicles/components/vehicles-list/vehicles-list.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
