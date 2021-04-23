import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {

  @Input()
  vehicle: Vehicle | undefined;

  @Output()
  updateVehicle = new EventEmitter<Vehicle>();

  @Output()
  createVehicle = new EventEmitter<Vehicle>();

  @Output()
  deleteVehicle = new EventEmitter<number>();

  exists = false;

  formVehicle = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(2)]],
    branch: ['', [Validators.required, Validators.minLength(2)]],
    price: ['', [Validators.required, Validators.min(1)]],
    fuel: ['', [Validators.required, Validators.minLength(2)]],
    transmission: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.vehicle?.id) {
      this.formVehicle.patchValue(this.vehicle);
      if (this.vehicle?.name) {
        this.exists = true;
      }
    }
  }

  update(): void {
    if (this.formVehicle.valid) {
      this.updateVehicle.emit(this.formVehicle.value);
    }
  }

  create(): void {
    if (this.formVehicle.valid) {
      this.createVehicle.emit(this.formVehicle.value);
    }
  }

  delete(): void {
    this.deleteVehicle.emit(this.vehicle?.id);
  }


}
