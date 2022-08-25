import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Filef, FilefApi, LoopBackAuth, Reply, ReplyApi, SupportTicket } from 'src/app/shared/sdk';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent  {
  @Input() ticket:SupportTicket;
  reply:Reply[];
  text=""
  datas:Array<Filef>;
  @ViewChild(AddComponent) add:AddComponent;
  constructor(private auth:LoopBackAuth,private replyApi : ReplyApi,private fileApi:FilefApi) { }
  userId;
  ngOnInit(): void {
    this.init()
    this.userId=this.auth.getCurrentUserId();

    
  }
  init(){
    this.replyApi.find({
      where:{
        supportTicketId:this.ticket.id
      }
    }).subscribe((reply:Reply[])=>console.log(this.reply=reply))
    
    // console.log(this.reply);
  }
  getDatas(donne:Array<Filef>){
    this.datas = donne
    // console.log(this.datas);
  }

  save(){
    let r=new Reply();
    r.text=this.add.text as string
    r.supportTicketId=this.ticket.id;
    r.createdAt=new Date();
    r.appUserId=this.userId

    this.replyApi.create(r).subscribe((r:Reply)=>{
      for(let f of this.datas||[]){
        f.recource=Reply.getModelName();
        f.recourceId=r.id;
        this.fileApi.create(f).subscribe(()=>{
          this.init()
        });
      }
      this.init()
      this.clear()
    })
    
  }
  clear(){
    while(this.datas.length > 0) {
      this.datas.pop();
    }
  }
}
