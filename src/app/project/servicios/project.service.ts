import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl: string = environment.apiUrl + 'project/';

  constructor(private http: HttpClient) { }

  lista() : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseUrl}`);
  }

  crear(request: Project): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.baseUrl}`, request)
  }

  upload(request: Project): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.baseUrl}`, request)
  }

  editar(request: Project): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(`${this.baseUrl}`, request)
  }

  eliminar(id: number): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`)
  }
}
