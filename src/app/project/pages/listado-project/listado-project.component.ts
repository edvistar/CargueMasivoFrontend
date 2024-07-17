import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Project } from '../../interfaces/project';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../../servicios/project.service';
import { CompartidoService } from 'src/app/compartido/compartido.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listado-project',
  templateUrl: './listado-project.component.html',
  styleUrls: ['./listado-project.component.css']
})
export class ListadoProjectComponent implements OnInit, AfterViewInit {

  displayedColumns: string [] = [
    'nameProject',
    'description',
  ];
  dataInicial: Project []= [];
  dataSource = new MatTableDataSource(this.dataInicial);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;

  constructor(private _projectServivio: ProjectService,
              private _compartidoService: CompartidoService,
              private dialog: MatDialog){}

              // nuevoProject(){
              //   this.dialog
              //       .open(ModalEspecialidadComponent, {disableClose: true, width: '400px'})
              //       .afterClosed()
              //       .subscribe((resultado)=> {
              //         if(resultado === 'true') this.obtenerEspecialidades();
              //       })
              // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

}
