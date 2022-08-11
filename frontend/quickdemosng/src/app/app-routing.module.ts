import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserEditComponent } from './pages/user/edit/user-edit.component';
import { UsersComponent } from './pages/user/users.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'users', component: UsersComponent},
  { path: 'users/edit', component: UserEditComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
