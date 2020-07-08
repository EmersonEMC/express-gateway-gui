import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SibebarComponent } from './sibebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SibebarComponent],
  exports: [SibebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SibebarModule { }
