import { Component }           from '@angular/core';
//import { testService }         from './test.service'

@Component({
  selector: 'user-home',
  templateUrl: './userhome.component.html'
})
export class UserHomeComponent { 
    value: string = ""; 
    
    //constructor(private _testService: testService) { }  
    
    ngOnInit(): void { 
      //this.value = this._testService.getData(); 
    }
}
