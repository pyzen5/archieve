import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { King } from './king';
import { KingService } from './king.service';

@Component({
  selector: 'my-kings',
  templateUrl: './kings.component.html',
  styleUrls: ['./kings.component.css'],
  providers: [KingService]
})
export class KingsComponent implements OnInit{   
  title = 'Game of Thrones';
  kings: King[];  
  selectedKing: King;

  constructor(
    private router: Router,
    private kingService: KingService) { }

  getKings(): void {
    this.kingService.getKings().then(kings => this.kings = kings);
  }
  ngOnInit(): void {
    this.getKings();
  }

  onSelect(king: King): void {
    this.selectedKing = king;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedKing.id]);
  }
}
