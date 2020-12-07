import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs" ;
import { Posts } from '../classes/post';
import { hoods } from '../classes/hood';

 

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  
  constructor(private httpclient:HttpClient){ }

  gethood():Observable<any>{
    
    return this.httpclient.get('https://hoodhub.herokuapp.com/create_hood/')
  }
  
  post(newhood:hoods): Observable<any>{
    return this.httpclient.post('https://hoodhub.herokuapp.com/create_hood/', newhood)
  }
  
}
