import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {

  numbers=[
    {value:22,label:'Beğeni'},
    {value:32400,label:'İzlenme'},
    {value:22,label:'Üye'}
  ];
  products=[
    {name:'Sandelye',description:'Yemek Sandelyesi',image:'https://cdn.dsmcdn.com/ty15/product/media/images/20201008/15/14179864/91568254/1/1_org_zoom.jpg'},
    {name:'Hurç',description:'Vedsey // Gri & Pencereli & Baza Düzenleyici Hurç',image:'https://cdn.dsmcdn.com/ty326/product/media/images/20220206/4/45476259/81168241/1/1_org_zoom.jpg'},
    {name:'Yastık',description:'Varol 2 Adet Microfiber Antialerjik Yastık 910gr VRL0000202',image:'https://cdn.dsmcdn.com/ty76/product/media/images/20210224/12/66443555/13790863/1/1_org_zoom.jpg'},

   ]
  constructor() { }

  ngOnInit(): void {
  }

}
