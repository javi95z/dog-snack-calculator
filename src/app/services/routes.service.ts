import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  apiUrl = 'https://infinite-lake-80504.herokuapp.com/api/routes/';
  constructor(private http: HttpClient) {}

  getAllRoutes(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }

  getRoute(id: number): Promise<any> {
    return this.http.get(this.apiUrl + id).toPromise();
  }
}

export interface Route {
  id: number;
  locations?: Location[];
  name: string;
}

export interface Location {
  altitude: number;
  latitude: number;
  longitude: number;
}
