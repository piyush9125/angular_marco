import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {

 subjectlist:any[] =[];

 constructor(private subjectservice:SubjectService){}
  ngOnInit(): void {
    this.all_subject();
  }

 all_subject(){
this.subjectservice.all_subject().subscribe((res)=>{
  console.log(res);
 this.subjectlist=res;
});
 }
 delete_subject(id: any){
  alert('subject  deleted sucessfully completed');
  this.subjectservice.delete_subject(id).subscribe((res)=>{
    this.all_subject();
  })
 }

 
  


}
