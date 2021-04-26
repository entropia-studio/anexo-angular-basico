import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from '../../models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  vehicles$: Observable<Vehicle[]> | undefined;

  constructor(
    private vehiclesService: VehiclesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicles$ = this.vehiclesService.getVehicles();
  }

  deleteVehicle(id: number): void {
    this.vehiclesService.deleteVehicleById(id).subscribe({
      next: () => this.getVehicles()
    });
  }

  navigateToVehicle(id: number) {
    this.router.navigate(['/vehicles', id]);
  }
}
