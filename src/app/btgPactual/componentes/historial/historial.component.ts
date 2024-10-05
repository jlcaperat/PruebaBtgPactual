import { Component, OnInit } from '@angular/core';
import { BtgService } from '../../service/Btg.service';
import { Inversiones } from '../../interfaces/Inversiones';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{

  inversiones!:Inversiones[];

  constructor(private  service:BtgService){    

  }
  ngOnInit(): void {
    this.service.getInversiones().subscribe(response => this.inversiones =response)
    }
  }

 

