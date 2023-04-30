import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions:any;

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get("http://localhost:3000/products");

  }
  getDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/details/"+ id);
  }
  getProductsById(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/products/"+id);
  }
  postDetails(obj:any):Observable<any>
  {
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.http.post("http://localhost:3000/reviews",obj,this.httpOptions);
  }
}