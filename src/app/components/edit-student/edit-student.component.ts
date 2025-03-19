import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  constructor(private  route: ActivatedRoute,private studentservice :StudentService){}
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.get_student(id);
  }

  student={
    id:'',
    name:'',
    email:''
  }


  get_student(id:any){
    this.studentservice.get_student(id).subscribe((res)=>{
      console.log(res)
      this.student=res;
    })
  }

  update_student(){
    this.studentservice.update_student(this.student).subscribe((res)=>{
      alert('updated sucessfully completed.')
    })
  }

}
