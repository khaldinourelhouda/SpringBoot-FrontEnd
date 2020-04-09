import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './shared/user';

@Injectable()
export class UserService {

  constructor(private http:HttpClient){

  }

  SaveUser(user:User):Observable<any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
      return this.http.post("http://localhost:9988/registration",user,{headers:headers});
  }

  LoginUser(user:User):Observable<any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
      return this.http.post("http://localhost:9988/login",user,{headers:headers});
  }

  getAllUsers(token:any):Observable<any>{
    const headers = new HttpHeaders({'Authorization':'Bearer'+token});
      return this.http.get("http://localhost:9988/users",{headers:headers});
  }

  getOneDepart(id:number):Observable<any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.http.get("http://localhost:9988/user/"+id);
}
  updateUser(user: User):Observable<any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.http.put("http://localhost:9988/edit",user,{headers:headers});
}
deleteUser(id: number):Observable<any>{
  const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
  return this.http.delete("http://localhost:9988/delete"+ `/${id}`);
}
}
