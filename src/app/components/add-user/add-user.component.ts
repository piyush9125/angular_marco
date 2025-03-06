import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {


  constructor(private userservice:UserService){}
  user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    role:''
  }

  register_user(user:any){
    this.userservice.register(this.user).subscribe((res)=>{

      alert(res);
      this.user.username='';
      this.user.password='';
      this.user.firstName='';
      this.user.lastName='';
      this.user.email='';
      this.user.role='';
    })
  }

}
