import { NgModule }     from '@angular/core';

import { MultimodComponent } from './multimod.component';
import { FeatureModule } from './feature/feature.module';

@NgModule({  
  imports:[FeatureModule],
  declarations: [
    MultimodComponent    
  ],  
  exports: [ MultimodComponent ]
})
export class MultimodModule { }
