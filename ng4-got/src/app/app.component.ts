import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/kings" routerLinkActive="active">Kings</a>
    </nav>
    <router-outlet></router-outlet>    
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Game of Thrones';  
}
