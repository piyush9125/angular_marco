import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

login(user:any):Observable<any>{
  const url='http://localhost:8091/user/login-user';
  return this.http.post(url,user);
}


register(user:any):Observable<any>{
  const apiurl='http://localhost:8091/user/register-user';
  return this.http.post(apiurl, user, { responseType: 'text' });

}

alluser():Observable<any>{
  const url='http://localhost:8091/user/get-all-user'
  return this.http.get(url)
}


deleteuser(username:string):Observable<any>{
const durl=`http://localhost:8091/user/delete-user-by-username?username=${username}`;
return this.http.delete(durl,{'responseType':'text'});
}



}
