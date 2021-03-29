import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  list: Car[];

  constructor() {
    //to declare a static list of cars
    this.list = [{'matricule':'cccc' ,'type_de_vehicule':'voiture','annee_de_fabrication':new Date('10/25/2015'),'marque': 'clio', 'type_de_carburant':'Essence','Consommation_carburant_en_L':5555,'puissance':4444,'type_entretien':'valide','Etat_Maintenance':'hhhh','Capacite_en_Kg':123, 'Disponibilite':'dispo','Kilometrage_en_km':157},


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
