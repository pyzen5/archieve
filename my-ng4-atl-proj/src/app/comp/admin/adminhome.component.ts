import { Component }           from '@angular/core';
//import { testService }         from './test.service'

@Component({
  selector: 'admin-home',
  templateUrl: './adminhome.component.html'
})
export class AdminHomeComponent { 
    value: string = ""; 
    
    //constructor(private _testService: testService) { }  
    
    ngOnInit(): void { 
      //this.value = this._testService.getData(); 
    }
}
