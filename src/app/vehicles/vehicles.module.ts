import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    VehiclesListComponent,
    VehiclesComponent,
    VehicleComponent,
    VehicleFormComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
