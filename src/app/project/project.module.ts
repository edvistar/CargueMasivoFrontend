import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { MaterialModule } from '../material/material.module';
import { ProjectService } from './servicios/project.service';
import { ListadoProjectComponent } from './pages/listado-project/listado-project.component';



@NgModule({
  declarations: [
    ListadoProjectComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule
  ],
  providers:[
    ProjectService
  ]
})
export class ProjectModule { }
