import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/sevices/driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.scss']
})
export class UpdateDriverComponent implements OnInit {

currentDriver = new Driver();//nv driver affiché dans le formulaire our le modifier
  constructor(private driverService : DriverService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id)

    this.currentDriver = this.driverService.consulterDriver(this.activatedRoute.snapshot.params.id);
   console.log(this.currentDriver);
  }
  updateDriver(){
    console.log(this.currentDriver);

  }

}
