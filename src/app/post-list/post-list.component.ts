import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: UserService) { }


  ngOnInit(): void {
    this.getUserPosts();
  }

  posts:Post[]|undefined;
  getUserPosts() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.parent?.snapshot.paramMap;
      const id = Number(routeParams?.get("id"));
      this.service.getUserPosts(id).subscribe((posts) => {
        this.posts = posts;
      })
    });
  }
}
