import { HttpClient, HttpHeaders } from '@angular/common/http';
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

get_user(username:any):Observable<any>{
  const g_url=`http://localhost:8091/user/get-user-by-username/${username}`;
return this.http.get(g_url);
}

Update_user(user:any):Observable<any>{
  const u_url='http://localhost:8091/user/update-user';
return this.http.put(u_url,user);
}
// Update_user(user: any): Observable<any> {
//   const u_url = 'http://localhost:8091/user/update-user';
//   return this.http.put(u_url, JSON.stringify(user), {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' }) // Ensure JSON format
//   });
// }



}
