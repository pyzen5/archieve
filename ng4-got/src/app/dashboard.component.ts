import { Component, OnInit } from '@angular/core';

import { King } from './king';
import { KingService } from './king.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  kings: King[] = [];
  constructor(private kingService: KingService) { }
  ngOnInit(): void {
    this.kingService.getKings()
      .then(kings => this.kings = kings.slice(1, 5));
  }
}
