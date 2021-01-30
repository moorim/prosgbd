import { Injectable } from '@angular/core';
import {FORMATEURS} from './formateurs'
@Injectable({
  providedIn: 'root'
})
export class FormateurNavigService {

  constructor() { }
  get(){return FORMATEURS;}
  add(formateur){
    
    FORMATEURS.push(formateur);
  }
  deleteformateur(formateur){
    let index;
    index=FORMATEURS.indexOf(formateur);
    if(FORMATEURS.indexOf(formateur)>=0){
      FORMATEURS.splice(index,1);
    }
  }
  getformateur(id:number){
    return FORMATEURS[id-1];
  }
}
