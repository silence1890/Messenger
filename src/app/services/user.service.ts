import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends : User[];
  constructor() 
  {
    let myUser: User = {
      nick: 'Jorge',
      correo: 'jorge.sosa@gmail.com',
      status: 'online',
      uid:0 
    };

    let user1: User = {
      nick: 'Mariano',
      correo: 'jose.mariano@gmail.com',
      status: 'online',
      uid:2,
      friend:true 
    };
    let user2: User = {
      nick: 'Francisco',
      correo: 'francisco.cosme@gmail.com',
      status: 'offline',
      uid:3,
      friend:false 
    };
    let user3: User = {
      nick: 'Jose',
      correo: 'jose.cartagena@gmail.com',
      status: 'busy',
      uid:4,
      friend:true 
    };
    let user4: User = {
      nick: 'Chris',
      correo: 'alejandro.sosa@gmail.com',
      status: 'away',
      uid:5,
      friend:true 
    };
    let user5: User = {
      nick: 'Alejandra',
      correo: 'alejandra.cifuentes@gmail.com',
      status: 'offline',
      uid:6,
      friend:true 
    };

    this.friends = [user1, user2, user3, user4, user5];
  }
  getFriends()
  {
    return this.friends;
  }
}
