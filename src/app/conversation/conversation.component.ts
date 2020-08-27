import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User[];
  friend: User;
  price: number = 78.2842;
  date: any = Date.now();
  
  constructor(private activateRoute: ActivatedRoute, private userService: UserService) 
  { 
    this.friendId = this.activateRoute.snapshot.params.uid;
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record)=>{return record.uid == this.friendId});

    console.log(this.friendId);
  }

  ngOnInit() {
  }

}
