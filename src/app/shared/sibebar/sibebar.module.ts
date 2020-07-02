import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SibebarComponent } from './sibebar.component';



@NgModule({
  declarations: [SibebarComponent],
  exports: [SibebarComponent],
  imports: [
    CommonModule
  ]
})
export class SibebarModule { }
