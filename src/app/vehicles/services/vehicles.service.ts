import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private vehiclesUrl = 'api/vehicles';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(this.vehiclesUrl);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(`${this.vehiclesUrl}/${id}`);
  }

  updateVehicleById(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(`${this.vehiclesUrl}/${vehicle.id}`, vehicle);
  }

  deleteVehicleById(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.vehiclesUrl}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(`${this.vehiclesUrl}`, vehicle);
  }
}
