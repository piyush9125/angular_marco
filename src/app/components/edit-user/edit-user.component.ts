import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AllUsersComponent } from '../all-users/all-users.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{


  constructor(private route: ActivatedRoute, private userService: UserService) {}
  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.get_user(username);
  }

  user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    role:''

  };

  get_user(username:any){
    this.userService.get_user(username).subscribe((res)=>{
      this.user=res;
    })

  }

  updateUser(){
    console.log(this.user);
    this.userService.Update_user(this.user).subscribe((res)=>{
      alert('User update succesfully completed');
    })
  }

}
