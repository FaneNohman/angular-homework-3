import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User,Post} from "src/models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient) { }

  base_url="https://jsonplaceholder.typicode.com";

  getUsers():Observable<User[]>{
    return this.client.get<User[]>(`${this.base_url}/users/`);
  }

  getUser(id:number):Observable<User>{
    return this.client.get<User>(`${this.base_url}/users/${id}`);
  }
  
  deleteUser(id:number):Observable<any>{
    return this.client.delete<User>(`${this.base_url}/users/${id}`);
  }

  getUserPosts(id:number):Observable<Post[]>{
    var str = `${this.base_url}/users/${id}/posts`;
    console.log(str);
    return this.client.get<Post[]>(`${this.base_url}/users/${id}/posts`)
  }
}