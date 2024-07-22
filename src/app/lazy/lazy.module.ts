import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { DemoLazyComponent } from './demo-lazy/demo-lazy.component';


@NgModule({
  declarations: [
    DemoLazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
