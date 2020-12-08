import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  baseUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { 
    this.allHood = new this.deleteAllHoods("","","","");
  }

  getAllHoods(){
    return this.http.get(this.baseUrl)
  }
  get(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(data){
    return this.http.post(this.baseUrl, data);
  }
  update(id,data){
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }
  delete(id){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  deleteAllHoods(){
    return this.http.delete(this.baseUrl);
  }
  findByTitle(title){
    return this.http.get(`${this.baseUrl}?title=${title}`);
  }
}
