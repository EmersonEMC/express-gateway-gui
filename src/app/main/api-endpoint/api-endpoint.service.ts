import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iapiendpoint } from '../../interfaces/iapiendpoint';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  constructor(private http: HttpClient) { }

  getAllApiEndPoint(): Observable<Iapiendpoint[]> {
    return this.http.get<Iapiendpoint[]>('assets/json/all-apiendpoint.json');
  }
}
