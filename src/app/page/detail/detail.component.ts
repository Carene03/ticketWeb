import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reply, Role, Ticket, User } from 'src/app/class/reply';
import { AddComponent } from 'src/app/component/add/add.component';
import { Filef, FilefApi, LoopBackAuth, SupportTicket, SupportTicketApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ticket:any|SupportTicket = new SupportTicket();
  attachedFile:Array<Filef>=[];
  datas:Array<Filef>;
  @ViewChild(AddComponent) add:AddComponent;
  constructor(private route: ActivatedRoute, private fileApi : FilefApi, private auth : LoopBackAuth, private ticctetApi : SupportTicketApi) { }

  ngOnInit(): void {
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
    this.ticctetApi.findById(this.ticket.id).subscribe((value) => {
      if (value) this.ticket = value;
    });
  }

  getAttachedFiles(){
    const condition = {
      resource: SupportTicket.getModelName(),
      recourceId: this.ticket.id
    }
    this.fileApi.getFile(condition).subscribe((val)=>{});
  }

  save(){
    let data = {
      "file": this.datas,
      "recource": SupportTicket.getModelName(),
      "recourceId": this.ticket.id
    }

    for( let f of this.datas){
      f.recource = SupportTicket.getModelName();
      f.recourceId = this.ticket.id;
      this.fileApi.create(f);
    }

    console.log(data);
    
  }
  getDatas(donne:Array<Filef>){
    this.datas = donne
    console.log(this.datas);
  }
}
