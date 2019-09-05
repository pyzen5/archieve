import { Component, OnInit, Input }           from '@angular/core';
import { FormControl, FormGroup  }       from '@angular/forms';
import { AppService }                   from '../service/app.service';
import { Router }            from '@angular/router';
import { User }                         from '../model/user'
@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
    @Input() user: User;
    
    constructor(
        private _appService: AppService,
        private router: Router) { } 
    
    ngOnInit() {        
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if(!this.user){this.userReset();}
    }
    
    loginSubmit(user: User): void{        
        this.user = this._appService.validateUser(this.user);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        if(this.user.usertype == 'admin'){
            this.router.navigate(['/adminHome']);
        }
        else if(this.user.usertype == 'normal'){
            this.router.navigate(['/userHome']);
        }
    }
    
    logoutSubmit(): void{
        this.userReset();
        localStorage.removeItem('currentUser');
        this.router.navigate(['/home']);
    }
    
    userReset(): void{
        this.user ={
            username: '',
            password: '',
            status: false,
            usertype: '',
            genres: '',
            picture: '',
            socialids: '',
            name: '',
            friends: '',
            rating: '',
            reviews: '',  
            recommend: ''
        }; 
    }
}
