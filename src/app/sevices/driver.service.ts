import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { Observable, observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  apiURL: string = 'http://127.0.0.1:5000/api/Chauffeur';
  list: Driver[];
  driver : Driver;

  constructor(private http : HttpClient) {
   /* this.list = [{'idDriver':1,'Matricule_CNSS':'cccc' ,'nom':'rania','prenom':'kilani','Num_telephone': 123456987,'adresse':'bizerte','Date_de_naissance':new Date("11/07/2001"), 'Date_de_embauche':new Date("11/07/2020"),'email':'rania@kkk.com'},
    {'idDriver':2,'Matricule_CNSS':'cccc' ,'nom':'rania','prenom':'kilani','Num_telephone': 123456987,'adresse':'bizerte', 'Date_de_naissance':new Date("11/07/2001"), 'Date_de_embauche':new Date("11/07/2020"),'email':'rania@kkk.com'}

  ];*/
  }
  listeDriver(): Observable<Driver[]>{ //tab de driver de type observable
    return this.http.get<Driver[]>(this.apiURL); //retourner liste des chauffeurs
  }
  /*listeDriver() {
    return this.list;
  }*/
  /*addDriver(driver : Driver){
   return this.list.push(driver);
 }
*/
 addDriver( drv: Driver):Observable<Driver>{
  return this.http.post<Driver>(this.apiURL, drv, httpOptions);
  }
 //update
 consulterDriver(id:number): Driver{// pour parcourir tableau de driver
 return this.driver =  this.list.find(p => p.idCh == id);
   // return this.driver;
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
