import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AddCarComponent } from './layouts/admin-layout/add-car/add-car/add-car.component'
import { UpdateCarComponent } from "./layouts/admin-layout/update-car/update-car/update-car.component";
import { AddDriverComponent } from "./layouts/admin-layout/add-driver/add-driver/add-driver.component";
import { UpdateDriverComponent } from "./layouts/admin-layout/update-driver/update-driver/update-driver.component";
import { DriverListComponent } from "./layouts/admin-layout/driver-list/driver-list/driver-list.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: 'addCar',
    component: AddCarComponent,

  },
  {
    path: 'updateCar',
    component: UpdateCarComponent,

  },
  {
    path: 'api/Chauffeur',
    component: DriverListComponent,
    loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"

  },
  {
    path: 'addDriver',
    component: AddDriverComponent,

  },
  {
    path: 'updateDriver/:id',
    component: UpdateDriverComponent,

  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

