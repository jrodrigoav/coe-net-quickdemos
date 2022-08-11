import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  constructor(private typicodeService: TypicodeService, private router: Router) { }

  ngOnInit(): void {
    this.typicodeService.getAllUsers().subscribe(r => this.users = r);
  }

  editItemHandler(selectedUser: IUser): void {
    this.router.navigate(['/users/edit'], {
      state: {
        selectedUser: selectedUser
      }
    });
  }
}
