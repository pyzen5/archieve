import { Injectable } from '@angular/core';

import { User } from '../model/user';

@Injectable()
export class AppService {

  validateUser(user: User): User {
    console.log(user);
    if(user.username=='phani'){
        user.status = true;
        user.usertype='admin';
    }
    if(user.username=='kiran'){
        user.status = true;
        user.usertype='normal';
    }
    return user;
  }
  
}
