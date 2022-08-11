import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users:IUser[]=[];

  @Output() editItemRequest = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {
  }

  editUser(userInRow: IUser) {
    this.editItemRequest.emit(userInRow);
  }
}
