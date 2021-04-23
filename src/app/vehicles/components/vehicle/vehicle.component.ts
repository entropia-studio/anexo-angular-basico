import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../../models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicle$: Observable<Vehicle> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id !== 'new') {
      this.vehicle$ = this.vehiclesService.getVehicleById(id);
    }
    else {
      this.vehiclesService.getVehicles().subscribe({
        next: (vehicles) => {
          this.vehicle$ = of({ id: this.genId(vehicles) });
        }
      });
    }
  }

  genId(vehicles: Vehicle[]): number {
    return vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 1;
  }

  updateVehicle(event: Vehicle): void {
    this.vehiclesService.updateVehicleById(event).subscribe({
      next: result => {
        this.router.navigate(['/vehicles']);
      },
      error: console.log
    });
  }

  createVehicle(event: Vehicle): void {
    this.vehiclesService.createVehicle(event).subscribe({
      next: result => {
        this.router.navigate(['/vehicles']);
      },
      error: console.log
    });
  }

  delete(id: number): void {
    this.vehiclesService.deleteVehicleById(id).subscribe({
      next: () => this.router.navigate(['/vehicles'])
    });
  }

}
