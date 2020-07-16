import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  fetchProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:4205/api/project/');
  }

  createProject(name: string): Observable<Project> {
    return this.http.post<Project>('http://localhost:4205/api/project/', {
      name
    });
  }

  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>('http://localhost:4205/api/project/' + id);
  }
}
