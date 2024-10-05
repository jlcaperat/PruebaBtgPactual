import { Component, OnInit } from '@angular/core';
import { Inversiones } from '../../interfaces/Inversiones';
import { BtgService } from '../../service/Btg.service';

@Component({
  selector: 'app-cancelaciones',
  templateUrl: './cancelaciones.component.html',
  styleUrl: './cancelaciones.component.css'
})
export class CancelacionesComponent implements OnInit {


  inversiones!: Inversiones[];

  constructor(private service: BtgService) {

  }
  ngOnInit(): void {
    this.service.getInversionesActiva().subscribe(response => this.inversiones = response)
  }

  cancelar(idUnico:string) {
    this.service.deleteByIdUnico(idUnico)
  }

}
