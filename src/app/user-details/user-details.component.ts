import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  user: User | undefined;

  getUser() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get("id"));
      this.service.getUser(id).subscribe((user) => {
        this.user = user;
      })
    })
  }
}
