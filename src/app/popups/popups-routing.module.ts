import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoupsHomeComponent } from './poups-home/poups-home.component';

const routes: Routes = [
  {path:'',component:PoupsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
