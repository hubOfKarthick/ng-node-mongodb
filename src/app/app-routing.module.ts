import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './components/add-data/add-data.component';
import { DataListComponent } from './components/data-list/data-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stories',
    pathMatch: 'full'
  },
  {
    path: 'stories',
    component: DataListComponent
  },
  {
    path: 'addstory',
    component: AddDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
