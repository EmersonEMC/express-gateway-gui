import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiEndpointComponent } from './api-endpoint.component'


const routes: Routes = [
  { path: '', component: ApiEndpointComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiEndpointRoutingModule { }
