import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoservicioService } from '../pagoservicio.service';

@Component({
  selector: 'app-registrarpago',
  templateUrl: './registrarpago.component.html',
  styleUrls: ['./registrarpago.component.css']
})
export class RegistrarpagoComponent implements OnInit {
  pago!: Pago;
  constructor(private pagoservicio: PagoservicioService) { }

  ngOnInit(): void {
  }
  add(){
    alert('Se agrego al estudiante');
    this.pagoservicio.poner(this.pago);
  }
}
