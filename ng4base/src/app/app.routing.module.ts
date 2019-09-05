import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MultimodModule } from './multimod/multimod.module';
import { DbModule } from './databinding/db.module';
import { RoutingModule } from './routing/routing.module';

import { MultimodComponent } from './multimod/multimod.component';
import { DbComponent } from './databinding/db.component';
import { RoutingComponent } from './routing/routing.component';
import { ErrorComponent } from './routing/error.component';

const routes: Routes = [
    { path: '', redirectTo: '/multimod', pathMatch: 'full' },
    { path: 'multimod',  component: MultimodComponent },
    { path: 'databinding',  component: DbComponent },
    { path: 'routing', component: RoutingComponent },
    { path: '**', component: ErrorComponent }
  ];

@NgModule({
    imports:[ RouterModule.forRoot(routes), MultimodModule, DbModule, RoutingModule ],
    exports:[ RouterModule ]
})
export class AppRoutingModule{}
