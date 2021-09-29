import { Injectable } from '@angular/core';
import { Ayuda } from './ayuda';

@Injectable({
  providedIn: 'root'
})
export class AyudaservicioService {

  constructor() { }
  get(): Ayuda[] {
    return JSON.parse(localStorage.getItem('ayudas')||'[]');
  }
  post(ayuda: Ayuda){
    let ayudas: Ayuda[] = [];
    if(this.get()!= null){
      ayudas= this.get();
    }
    ayudas.push(ayuda);
    localStorage.setItem('datos', JSON.stringify(ayudas));
  }
}
