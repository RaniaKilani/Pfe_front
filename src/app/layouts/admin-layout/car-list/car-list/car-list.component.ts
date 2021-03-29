import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/sevices/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  list: Car[];

//navigate to the add page
  constructor(private router:Router, private carService:CarService) {
    //injecter l'objet de type CarService
    this.list = carService.listeCar();

   }
  goToAddPage(AddPage:string):void{
      this.router.navigate([`${AddPage}`]);
  }



 //delete function
 delete(el){
   let conf = confirm("you are sure to delete car?")
   if (conf)

 this.list.splice(el-1,1);
 }
 //add function
 /*add(el){
  var newCar = {
    id:1, name:'rania', ville:'bizerte', city:'mmmm', salary:4477
  }
  this.list.push(newCar);
}*/
  ngOnInit(): void {
  }

}
