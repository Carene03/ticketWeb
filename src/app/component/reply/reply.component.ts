import { Component, Input, OnInit } from '@angular/core';
import { ReplyApi, SupportTicket } from 'src/app/shared/sdk';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() ticket:any|SupportTicket;
  constructor(private preplyModel : ReplyApi) { }

  ngOnInit(): void {
  }

}
