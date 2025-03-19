import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit{
 

  constructor(private subjectservice:SubjectService,private route:ActivatedRoute){}
  ngOnInit(): void {
    let subjectId=this.route.snapshot.paramMap.get('id');
    this.get_subject(subjectId);
  }

  subject={
    id:'',
    name:''
  };

  get_subject(subjectId:any){
    this.subjectservice.get_subject(subjectId).subscribe((res)=>{
      this.subject=res;
    })

  }

  update_subject(){
  this.subjectservice.update_subject(this.subject).subscribe((res)=>{
    alert('subject updated succefully.');
  })
  }


}
