import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

constructor(private studentservice : StudentService){}
   
student={
name:'',
email:''
}

  add_subject(  student:any){
    this.studentservice.add_student(this.student).subscribe((res)=>{
      alert('added');
      console.log(res);
      this.student.name='',
      this.student.email=''
    })
    
  }

}
