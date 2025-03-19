import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  add_student(student:any):Observable<any>{
    const url ='http://localhost:8091/student/add-student';
    return this.http.post(url,student,{responseType:'text'});
  }

 all_student():Observable<any>{
  const ur_l='http://localhost:8091/student/get-all-students';
  return this.http.get(ur_l);
 }

 get_student(id:any):Observable<any>{
  const url=`http://localhost:8091/student/get-student-by-id/${id}`
  return this.http.get(url);
 }

 delete_student(id:any):Observable<any>{
  const ur_l=`http://localhost:8091/student/delete-student/${id}`;
  return this.http.delete(ur_l,{responseType:'text'});
  
 }

 update_student(student:any):Observable<any>{
  const url='http://localhost:8091/student/update-student';
  return this.http.put(url,student);

 }





}
