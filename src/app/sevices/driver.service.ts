import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  list: Driver[];

  constructor() {
    this.list = [{'Matricule_CNSS':'cccc' ,'nom':'rania','prenom':'kilani','Num_telephone': 123456987, 'Date_de_naissance':new Date("11/07/2001"), 'Date_de_embauche':new Date("11/07/2020"),'email':'rania@kkk.com'},


  ];
  }
  listeDriver() {
    return this.list;
  }
  addDriver(driver : Driver){
   return this.list.push(driver);
 }

  /*deleteDriver(driver : Driver){
  // let conf = confirm("you are sure to delete car?")
   //if (conf)
   const index = this.list.indexOf(driver, 0);
   if (index > -1) {
     this.list.splice(index, 1);
   }

 //this.list.splice(driver-1,1);
 }*/
}
