import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poups-home',
  templateUrl: './poups-home.component.html',
  styleUrls: ['./poups-home.component.scss']
})
export class PoupsHomeComponent implements OnInit {

  modalActive=false;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    console.log("Change");

    this.modalActive=!this.modalActive;
  }

}
