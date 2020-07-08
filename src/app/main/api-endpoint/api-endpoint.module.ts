import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiEndpointRoutingModule } from './api-endpoint-routing.module';
import { ApiEndpointComponent } from './api-endpoint.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [ApiEndpointComponent],
  imports: [
    CommonModule,
    ApiEndpointRoutingModule,
    MatTableModule
  ]
})
export class ApiEndpointModule { }
