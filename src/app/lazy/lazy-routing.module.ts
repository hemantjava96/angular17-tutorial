import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoLazyComponent } from './demo-lazy/demo-lazy.component';

const routes: Routes = [
  {
    path: "", 
    component: DemoLazyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
