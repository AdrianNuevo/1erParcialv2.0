import { Injectable } from '@angular/core';
import { Pago } from './pago';

@Injectable({
  providedIn: 'root'
})
export class PagoservicioService {

  constructor() { }
  obtener(): Pago[]{
    return JSON.parse(localStorage.getItem('pagos')||'[]');
  }
  poner(pago: Pago){
    let pagos: Pago[]=[];
    if(this.obtener()!= null){
      pagos=this.obtener();
    }
    pagos.push(pago);
    localStorage.setItem('pagos', JSON.stringify(pagos));
  }
}
