import { Component, Input, OnInit } from '@angular/core';
import { SupportTicket } from 'src/app/shared/sdk';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() ticket:any|SupportTicket;
  constructor() { }

  ngOnInit(): void {
    console.log(this.ticket);
    
  }

}
