import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inversiones } from '../../interfaces/Inversiones';
import { BtgService } from '../../service/Btg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aperturas',
  templateUrl: './aperturas.component.html',
  styleUrl: './aperturas.component.css'
})
export class AperturasComponent {

  inversiones: Inversiones={
    idUnico: '',
    identificacion: '',
    fondo: '',
    monto: 0,
    estado: '',
    fecha: ''
  };

  constructor(private servicio: BtgService, private route:Router){

  }

  public myForm: FormGroup = new FormGroup({
    identificacion: new FormControl('', [Validators.minLength(4), Validators.required], []),
    fondo: new FormControl('', [Validators.minLength(4), Validators.required], []),
    monto: new FormControl('', [Validators.minLength(4), Validators.required, Validators.min(5000000)], []),
  })


  invertir() {
    this.inversiones.identificacion = this.myForm.value.identificacion
    this.inversiones.fondo = this.myForm.value.fondo
    this.inversiones.monto = this.myForm.value.monto
    this.servicio.crearApertura(this.inversiones).subscribe(response => response = response)

    
  }


}
