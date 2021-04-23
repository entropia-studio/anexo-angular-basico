import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from '../models/vehicle';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const vehicles = [
      { id: 1, name: 'Caddy', branch: 'Volkswagen', price: 15000, fuel: 'Diesel', transmission: 'Manual' },
      { id: 2, name: 'Twingo', branch: 'Renault', price: 9000, fuel: 'Petrol', transmission: 'Automatic' },
      { id: 3, name: 'Safrane', branch: 'Renault', price: 25000, fuel: 'Petrol', transmission: 'Manual' },
      { id: 4, name: 'Clio', branch: 'Renault', price: 11000, fuel: 'Diesel', transmission: 'Automatic' },
      { id: 5, name: '206', branch: 'Peugeot', price: 14500, fuel: 'Petrol', transmission: 'Manual' },
      { id: 6, name: 'Clase C', branch: 'Mercedes', price: 31000, fuel: 'Petrol', transmission: 'Automatic' },
      { id: 7, name: 'Sportage', branch: 'KIA', price: 21000, fuel: 'Diesel', transmission: 'Manual' },
      { id: 8, name: 'Polo', branch: 'Volkswagen', price: 10000, fuel: 'Petrol', transmission: 'Automatic' },
      { id: 9, name: 'Passat', branch: 'Volkswagen', price: 22000, fuel: 'Diesel', transmission: 'Automatic' },
      { id: 10, name: 'Megane', branch: 'Renault', price: 20000, fuel: 'Diesel', transmission: 'Manual' },
    ];
    return { vehicles };
  }

  // Overrides the genId method to ensure that a vehicle always has an id.
  // If the vehicles array is empty,
  // the method below returns the initial number (11).
  // if the vehicles array is not empty, the method below returns the highest
  // vehicle id + 1.
  genId(vehicles: Vehicle[]): number {
    return vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 1;
  }
}
