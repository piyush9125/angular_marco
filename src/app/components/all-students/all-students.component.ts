import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit{



  student:any[]=[];

  constructor(private studentservice :StudentService){}
  ngOnInit(): void {
    this.all_student();
  }
 

  all_student(){
    this.studentservice.all_student().subscribe((res)=>{
      this.student=res;
     console.log(res);
    });
  
    }


    deleteStudent(id: any) {
      this.studentservice.delete_student(id).subscribe((res)=>{
        alert(res);
        this.all_student();
      })
    }
    updateStudent(_t20: any) {
    throw new Error('Method not implemented.');
    }





  }







