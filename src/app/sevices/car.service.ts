import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  list: Car[];

  constructor() {
    //to declare a static list of cars
    this.list = [{'mat':'cccc' ,'ty':'voiture','an':new Date('10/25/2015'),'mr': 'clio', 'tyC':'Essence','powr':4444,'kilo':157,'conso':5555,'maint':{'clim':true, 'para' :false, 'vid':true, 'mout':true, 'pneau':true,'etat':'okk' },'nb' : 2,'cap':123, 'dispo':'dispo'},


  ];
 }
 //return list of cars
 listeCar() {
   return this.list;
 }
 addCar(car : Car){
   return this.list.push(car);
 }

}
