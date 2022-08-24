import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddComponent } from 'src/app/component/add/add.component';
import { SupportTicket, Filef, FilefApi, LoopBackAuth, SupportTicketApi, Reply } from 'src/app/shared/sdk';

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
  constructor(private router : Router, private route: ActivatedRoute, private fileApi : FilefApi, private auth : LoopBackAuth, private ticketApi : SupportTicketApi) { }

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
      this.fileApi.create(f).subscribe((val) => {
        console.log(val);
        
      });
    }

    // console.log(data);
    
  }
  getDatas(donne:Array<Filef>){
    this.datas = donne
    console.log(this.datas);
  }
}
