import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { KingDetailComponent } from './king-detail.component';
import { KingsComponent }      from './kings.component';
import { KingService }         from './king.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule ],
  declarations: [ AppComponent, KingDetailComponent, KingsComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ KingService ]
})
export class AppModule { }
