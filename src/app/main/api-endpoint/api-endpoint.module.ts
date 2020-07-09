import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiEndpointRoutingModule } from './api-endpoint-routing.module';
import { ApiEndpointComponent } from './api-endpoint.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ApiEndpointComponent],
  imports: [
    CommonModule,
    ApiEndpointRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ApiEndpointModule { }
