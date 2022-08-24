import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddComponent } from 'src/app/component/add/add.component';
import { SupportTicket, Filef, ReplyApi, FilefApi, LoopBackAuth, SupportTicketApi, Reply } from 'src/app/shared/sdk';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ticket:any|SupportTicket = new SupportTicket();
  attachedFile:Array<Filef>=[];
  datas:Array<Filef>;
  text:String;
  @ViewChild(AddComponent) add:AddComponent;
  constructor(private replyApi : ReplyApi, private router : Router, private route: ActivatedRoute, private fileApi : FilefApi, private auth : LoopBackAuth, private ticketApi : SupportTicketApi) { }

  ngOnInit(): void {
    
    if(!this.auth.getToken().id){
      this.router.navigate(['login']);
    }
    if(this.route.snapshot.paramMap.get('id')) {

      this.getTicketById(this.route.snapshot.paramMap.get('id'));
    } else {

    }
    this.ticket.reply=new Array<Reply>();
    let r:any=new Reply();
    r.text="something";
    r.user=this.ticket.owner;
    r.ticket=this.ticket;

    this.ticket.reply.push(r);
    this.ticket.file=new Array<File>();
    r.file=new Array<File>();
    r.file.push(new File(new Array<BlobPart>,"aaaa",{}));
    r.file.push(new File(new Array<BlobPart>,"aaaa",{}));
  }

  getTicketById(id){
    this.ticketApi.findById(id).subscribe((value) => {
      if (value) this.ticket = value;
    });
  }

  getAttachedFiles(){
    const condition = {
      resource: SupportTicket.getModelName(),
      recourceId: this.ticket.id
    }
    this.fileApi.getFile(condition).subscribe((val)=>{
      if (val) this.attachedFile = val;
    });
  }

  save(){
    let data = {
      "text": this.text,
      "appUserId": this.auth.getCurrentUserId(),
      "supporttikeckid": this.ticket.id
    }

    if(this.text){
      this.replyApi.create(data);
    }

    if(this.datas.length>0){
      for( let f of this.datas){
        f.recource = SupportTicket.getModelName();
        f.recourceId = this.ticket.id;
        this.fileApi.create(f).subscribe((val) => {
        });
      }
    }
    window.location.reload();
  }
  getDatas(donne:Array<Filef>){
    this.datas = donne
  }

  getReply(txt:String){
    this.text = txt;
  }
}
