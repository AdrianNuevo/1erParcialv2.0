import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../ayuda';
import { AyudaservicioService } from '../ayudaservicio.service';
import { Pago } from '../pago';
import { PagoservicioService } from '../pagoservicio.service';

@Component({
  selector: 'app-tablaayuda',
  templateUrl: './tablaayuda.component.html',
  styleUrls: ['./tablaayuda.component.css']
})
export class TablaayudaComponent implements OnInit {
  ayudas!: Ayuda[];
  pagos!: Pago[];
  constructor(private ayudaservicio: AyudaservicioService, private pagoservicio: PagoservicioService) { }

  ngOnInit(): void {
    this.get();
    this.obtener();
  }
  get(){
    this.ayudas = this.ayudaservicio.get();
  }
  obtener(){
    this.pagos = this.pagoservicio.obtener();
  }

}
