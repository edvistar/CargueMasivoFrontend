import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MasivoComponent } from './masivo/masivo.component';
import { ListadoProjectComponent } from '../project/pages/listado-project/listado-project.component';
import {} from '../project/project.module';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      {path: 'masivo', component: MasivoComponent, pathMatch: 'full'},
      {path: 'project', component: ListadoProjectComponent , pathMatch: 'full'},
      {path: '**', redirectTo: '', pathMatch: 'full'}

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LayoutRoutingModule { }
