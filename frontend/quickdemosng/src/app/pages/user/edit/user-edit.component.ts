import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userData: User = { id: 0, name: "", username: "", email: "", website: "" };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const tempVar = history.state.selectedUser;
    this.userData = new User({ id: tempVar.id, name: tempVar.name, username: tempVar.username, email: tempVar.email, website: tempVar.website });
  }
}
