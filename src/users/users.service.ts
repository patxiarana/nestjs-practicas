import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
   private users : any = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
   ]


    getUsers() {
         return this.users;
     }

     crateUser(user:CreateUserDto) {
      this.users.push(user);
      
        return {
            ...user,
            id: this.users.length + 1,
        }
     }
}



