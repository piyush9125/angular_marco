import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userservice:UserService,private router:Router){}  
 
  user={
    username: '',
    password: ''
  };

  
  login(){
    this.userservice.login(this.user).subscribe((res)=>{
      if(res!=null){
        if(res.role==='Admin'){
        this.router.navigateByUrl('admin-dashboard')
        }else{
          this.router.navigateByUrl('faculty-dashboard')
        }
      }else{
        console.log("invalid credientials !")
      }
      
    })
  }

}
