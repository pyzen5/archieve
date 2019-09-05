import { NgModule } from '@angular/core';
import { RoutingComponent } from './routing.component';
import { ErrorComponent } from './error.component';

@NgModule({
    declarations:[ RoutingComponent, ErrorComponent ],
    exports: [ RoutingComponent, ErrorComponent ]
})
export class RoutingModule{}