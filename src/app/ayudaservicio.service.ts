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
    localStorage.setItem('ayudas', JSON.stringify(ayudas));
  }
  extraer(tipo: string){
    let ayudas: Ayuda[]=[];
    if(this.get()!=null){
      ayudas=this.get();
    }
    var i=0;
    while(ayudas[i].tipo!=tipo){
      i++;
    }
    ayudas[i].cant--;
    localStorage.setItem('ayudas', JSON.stringify(ayudas));
  }
}
