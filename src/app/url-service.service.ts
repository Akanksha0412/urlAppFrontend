import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlData, user } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  urldata:Array<urlData>=[];
  userdata:Array<user>=[];

  constructor(private http:HttpClient) { }

  saveUrl(data:urlData){
    return this.http.post(`http://localhost:1200/create`,data);
  }

  getAll(){
    return this.http.get<Array<urlData>>(`http://localhost:1200/all`);
  }

  update(data:urlData,id:string|undefined){
    return this.http.put(`http://localhost:1200/update/${id}`,data);
  }

  delete(id:string|undefined){
    return this.http.delete(`http://localhost:1200/delete/${id}`);
  }

  saveUser(data:user){
    return this.http.post(`https://615f3a6af7254d0017068067.mockapi.io/user`,data);
  }
  getAllUser(){
    return  this.http.get<Array<user>>(`https://615f3a6af7254d0017068067.mockapi.io/user`);
  }

}
