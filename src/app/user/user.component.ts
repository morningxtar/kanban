import { Component, OnInit } from '@angular/core';
import {TagService} from '../services/tag.service';
import {Router} from '@angular/router';
import {TagModel} from '../models/tag.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  // @ts-ignore
  getUsers(): Array<TagModel> {
    this.userService.getUsers()
      .subscribe(value => {
        console.log(value);
        return value;
      }, error => {
        console.log(error);
      });
  }

}
