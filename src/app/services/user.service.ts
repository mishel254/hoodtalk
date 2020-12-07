import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';  
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url_apikey = ''
  _url = 'https://hoodhub.herokuapp.com/users/';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> =>{
      console.log(error)
      console.log(`${operation}' failed: ${error.message}`);
      result of(result as T);
    }
  }
}
