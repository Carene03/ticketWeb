import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/class/reply';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() ticket:any|Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
