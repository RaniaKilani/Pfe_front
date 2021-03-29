import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';

import { DriverService } from 'src/app/sevices/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  list: Driver[];

  constructor(private driverService:DriverService,private router:Router) {
    this.list = driverService.listeDriver();
  }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}
  ngOnInit(): void {
  }
 /* deleteDriver( el : Driver){

    this.driverService.deleteDriver(el);

  }*/

  deleteDriver(driver){
     let conf = confirm("you are sure to delete car?")
     if (conf)

   this.list.splice(driver,1);
   }

   /*
   deleteDriver(driver: Driver){//méthode pour supprimer un chaffeur
    //console.log(driver);
    this.driverService.deleteDriver(driver);
   }*/
}
