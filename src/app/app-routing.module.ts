import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: "users", component: UserListComponent},
  {path: "users/:id", component: UserDetailsComponent,
    children:[
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {path:"posts",component:PostListComponent},
    ]
  },
  {path: "**", redirectTo: "users", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
