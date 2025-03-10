import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  subject={
    id:'',
    name:''
  };
  constructor(private subjectservice:SubjectService){}
  add_subject(){
    console.log(this.subject);
    this.subjectservice.add_subject(this.subject).subscribe((res)=>{
      alert("subject added sucessfully");
      this.subject.name='';
    });

   // alert('subject is added');


  }

}
