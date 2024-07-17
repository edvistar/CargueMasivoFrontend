import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-masivo',
  templateUrl: './masivo.component.html',
  styleUrls: ['./masivo.component.css']
})
export class MasivoComponent {
  baseUrl: string = environment.apiUrl + 'project/upload/';
  data: any[] = [];
  constructor(private http: HttpClient) { }

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error('No se puede cargar varios archivos a la vez');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }
  saveData() {
    // Aquí puedes ajustar el formato de los datos si es necesario
    const formattedData = this.data.slice(1).map(row => {
      const obj: any = {};
      this.data[0].forEach((key: string, index: number) => {
        obj[key] = row[index];
      });
      return obj;
    });

    return this.http.post(this.baseUrl, formattedData).subscribe(response => {
      console.log('Datos guardados:', response);
    });
  }
}
