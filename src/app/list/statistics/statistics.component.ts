import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() statistics:any=[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.statistics)
  }

}
