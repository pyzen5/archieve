import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { King } from './king';
import { KingService } from './king.service';

@Component({
  selector: 'king-detail',
  templateUrl: './king-detail.component.html',
  styleUrls:['./king-detail.component.css']
})
export class KingDetailComponent implements OnInit{
  @Input() king: King;

  constructor(
    private kingService: KingService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.kingService.getKing(+params['id']))
      .subscribe(king => this.king = king);
  }
  goBack(): void {
    this.location.back();
  }
}
