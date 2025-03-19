import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userservice:UserService){}
  ngOnInit(): void {
    this.alluser();
  }
userlist:any[]=[]
  alluser(){
    this.userservice.alluser().subscribe((res)=>{
      this.userlist=res;
    }
    )
  }


  deleteuser(username:any){
    const confirmation=confirm('do you want to delete user?');

    if(confirmation){
      this.userservice.deleteuser(username).subscribe(
        (res)=>{
        alert(username+" deleted sucessfully completed");
        this.alluser();},
      (error)=>{
        alert(username+' deleted failed');
        this.alluser();
      }) 

    }
   
  }



}
