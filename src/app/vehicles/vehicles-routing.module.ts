import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

const routes: Routes = [
  {
    path: 'vehicles', component: VehiclesListComponent,
  },
  {
    path: 'vehicles/:id', component: VehicleComponent,
  },
  {
    path: '', redirectTo: 'vehicles', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
