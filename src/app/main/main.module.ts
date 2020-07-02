import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SibebarModule } from '../shared/sibebar/sibebar.module';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavbarModule,
    SibebarModule,
    FooterModule
  ]
})
export class MainModule { }
