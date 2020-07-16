import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Network } from './network.model';

@Injectable()
export class PlatformService {
  constructor(private http: HttpClient) {}

  fetchNetwork(projectId: string): Observable<Network> {
    return this.http.get<Network>(
      'http://localhost:4205/api/project/' + projectId + '/network/'
    );
  }
}
