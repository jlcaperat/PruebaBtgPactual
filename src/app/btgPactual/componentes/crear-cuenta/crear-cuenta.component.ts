import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BtgService } from '../../service/Btg.service';
import { Btg } from '../../interfaces/Btg';
import { Router } from '@angular/router';





@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {

  btg!: Btg;

  constructor(private service: BtgService, private router:Router) {

  }



  public myForm: FormGroup = new FormGroup({
    identificacion: new FormControl('', [Validators.minLength(4), Validators.required], []),
    nombres: new FormControl('', [Validators.minLength(4), Validators.required], []),
    correo: new FormControl('', [Validators.minLength(4), Validators.required], []),
    celular: new FormControl('', [Validators.minLength(4), Validators.required], []),
    monto: new FormControl('', [Validators.minLength(4), Validators.required, Validators.min(500000)], []),
  })

  onSave() {
    if (this.myForm.invalid) {
      return
    }  
    this.service.crearSuscripcion(this.currentBtg).subscribe(response=> response = response)
  }


  get currentBtg(): Btg {
    this.btg = this.myForm.value as Btg
    return this.btg;
    }

}
