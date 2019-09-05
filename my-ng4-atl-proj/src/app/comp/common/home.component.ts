import { Component }           from '@angular/core';
//import { testService }         from './test.service'

@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html'
})
export class HomeComponent { 
    value: string = ""; 
    
    //constructor(private _testService: testService) { }  
    
    ngOnInit(): void { 
      //this.value = this._testService.getData(); 
    }
}
