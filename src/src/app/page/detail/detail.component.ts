import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddComponent } from 'src/app/component/add/add.component';
import { ReplyComponent } from 'src/app/component/reply/reply.component';
import { SupportTicket, Filef, FilefApi, LoopBackAuth, SupportTicketApi, Reply, ReplyApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ticket:SupportTicket;
  attachedFile:Array<Filef>=[];
  
  
  
  @ViewChild(ReplyComponent) replyc:ReplyComponent;

  

  constructor(
    private router : Router, 
    private route: ActivatedRoute,
     private fileApi : FilefApi, 
     private auth : LoopBackAuth, 
     private ticketApi : SupportTicketApi,
     private replyApi:ReplyApi
    ) { }

  ngOnInit(): void {
    
    if(!this.auth.getToken().id){
      this.router.navigate(['login']);
    }
    if(this.route.snapshot.paramMap.get('id')) {

      this.getTicketById(this.route.snapshot.paramMap.get('id'))
    } else {

    }
  }

  getTicketById(id){
    this.ticketApi.findById(id).subscribe((value) => {
      this.ticket=value as SupportTicket;
      
    })
  }

  getAttachedFiles(){
    const condition = {
      resource: SupportTicket.getModelName(),
      recourceId: this.ticket.id
    }
    this.fileApi.getFile(condition).subscribe((val)=>{});
  }

  
  
}
