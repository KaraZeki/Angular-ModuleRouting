import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'placeholders',loadChildren:()=> import('./placeholders/placeholders.module').then(m=>m.PlaceholdersModule) }, //Lazy Loading --Zeki
  {path:'tables',loadChildren:()=> import('./tables/tables.module').then(m=>m.TablesModule) }, //Lazy Loading --Zeki
  {path:'lists',loadChildren:()=> import('./list/list.module').then(m=>m.ListModule) }, //Lazy Loading --Zeki
  {path:'popups',loadChildren:()=> import('./popups/popups.module').then(m=>m.PopupsModule) }, //Lazy Loading --Zeki
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
