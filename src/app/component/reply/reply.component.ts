import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/class/reply';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() ticket:any|Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
