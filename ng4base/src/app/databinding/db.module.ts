import { NgModule }     from '@angular/core';

import { DbComponent } from './db.component';

@NgModule({  
  declarations: [
    DbComponent    
  ],  
  exports: [ DbComponent ]
})
export class DbModule { }
