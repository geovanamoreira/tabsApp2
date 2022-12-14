import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url='https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  buscarUsuarios(page: number){
    return this.http.get(`${this.url}?page=${page}`);
  }
}
