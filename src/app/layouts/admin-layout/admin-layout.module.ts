import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarListComponent } from './car-list/car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car/update-car.component';
import { DriverListComponent } from './driver-list/driver-list/driver-list.component';
import { AddDriverComponent } from './add-driver/add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver/update-driver.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    CarListComponent,
    AddCarComponent,
    UpdateCarComponent,
    DriverListComponent,
    AddDriverComponent,
    UpdateDriverComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
