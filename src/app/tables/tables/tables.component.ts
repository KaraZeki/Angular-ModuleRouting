import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {


   data=[
    {name:'Zeki',age:'25',job:'Yazılım Müh',employed:'hayır' },
    {name:'Hayro',age:'24',job:'Öğrenci',employed:'hayır' },
    {name:'Uveys',age:'15',job:'Öğrenci Müh',employed:'hayır' },
    {name:'Büşra',age:'5',job:'Öğrenci Müh',employed:'hayır' },
  ];
  headers=[
    {key:'employed',label:'Aldığı ücretten memnun mu?'},
    {key:'name',label:'Adı'},
    {key:'age',label:'Yaşı'},
    {key:'job',label:'Meslek'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
