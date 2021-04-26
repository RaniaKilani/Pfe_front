import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/sevices/driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.scss']
})
export class UpdateDriverComponent implements OnInit {

currentDriver = new Driver();//nv driver affiché dans le formulaire our le modifier
  constructor(private driverService : DriverService,private router:Router, private activatedRoute :ActivatedRoute) { }
  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit(): void {


   this.driverService.consulterDriver(this.activatedRoute.snapshot.params.id).
    subscribe( dr =>{ this.currentDriver = dr; });
    console.log(this.activatedRoute.snapshot.params.id);
  }
  updateDriver() {
    this.driverService.updateDriver(this.currentDriver).subscribe(() => {
    this.router.navigate(['listDriver']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
