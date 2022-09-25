import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private serviece:UserService) { }

  users:User[]|undefined;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.serviece.getUsers().subscribe((users)=>{
        this.users=users;
      },
      (error=>{
        console.log(error);
        console.log(error.status);
      })
    );
  }

  getUser(){
    
  }

  deleteUser(id:number){
    this.users=this.users?.filter(x=>x.id!==id);
    this.serviece.deleteUser(id).subscribe(()=>{});
    window.alert("post deleted " + id);
  }

}
