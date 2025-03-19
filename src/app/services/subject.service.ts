import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }


  add_subject(subject:any):Observable<any>{
    const url='http://localhost:8091/subject/add-subject';
    return this.http.post(url,subject);
  }


  all_subject():Observable<any>{
    const url='http://localhost:8091/subject/get-all-subjects';
    return this.http.get(url);

  }

delete_subject(id:any):Observable<any>{
const url=`http://localhost:8091/subject/delete-subject/${id}`;
return this.http.delete(url);
  }


get_subject(subjectId:any):Observable<any>{
const url=`http://localhost:8091/subject/get-subject-by-id/${subjectId}`
return this.http.get(url);
}

update_subject(subject:any):Observable<any>{
  const url='http://localhost:8091/subject/update-subject';
  return this.http.put(url,subject);
}


}
