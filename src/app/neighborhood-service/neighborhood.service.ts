import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {


  readonly APIUrl = 'https://hoodhub.herokuapp.com/create_hood/';

  constructor(private http: HttpClient) { }

  getNeighborhoodList(): Observable<any[]> {

    return this.http.get<any[]>(this.APIUrl);

  }

  addNeighborhood(val:any){

    return this.http.post(this.APIUrl, val );

  }

  // updateNeighborhood(val:any){

  //   return this.http.post(this.APIUrl, val );

  // }

  // deleteNeighborhood(val:any){

  //   return this.http.post(this.APIUrl, val );

  // }

  // getAllNeighborhoodNames(): Observable<any[]> {

  //   return this.http.get<any[]>(this.APIUrl);

  // }


}
