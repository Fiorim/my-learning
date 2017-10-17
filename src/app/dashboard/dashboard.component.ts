import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rowlabels = ['16/10', '17/10'];
  data = [[10, 15], [70, 80]];

  columnTypes = [
    {
      'type': 'string',
      'value': 'subjectName'
    },
    {
      'type': 'number',
      'value': 'saved'
    },
    {
      'type': 'number',
      'value': 'readed'
    }
  ];

  options = {
    'vAxis': {
      'title': 'Articles'
    },
    backgroundColor: 'transparent',
    'hAxis': {
      'title': 'Days'
    },
    'legend': {
      'position': 'top',
      'alignment': 'end'
    },
    'colors': ['#d4ae5d', '#8aa8a1'],
    seriesType: 'bars',
    'bar': { 'groupWidth': '40%' },
    lineWidth: 0,
    animation: {
        startup: true,
        duration: 500,
        easing: 'out',
    }

  };

  constructor() { }

  ngOnInit() { }

}
