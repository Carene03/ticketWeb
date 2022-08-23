import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reply, Role, Ticket, User } from 'src/app/class/reply';
import { AddComponent } from 'src/app/component/add/add.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ticket:any|Ticket=new Ticket();
  attachedFile:Array<File>=[];
  @ViewChild(AddComponent) add:AddComponent;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ticket.id=this.route.snapshot.paramMap.get('id');

    // call ws to init ticket detail
    this.ticket.title="Ticket 1 something"
    this.ticket.createdAt=new Date();
    this.ticket.owner=new User();

    this.ticket.owner.id=1;
    this.ticket.owner.userName="Mirana Carène";
    this.ticket.owner.role=new Role();


    this.ticket.owner.role.id=1;
    this.ticket.owner.roleName="user";

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
  get file():Array<File>{
    return this.add.file;
  }
  get text():string{
    return this.add.text as string;
  }
  test(){
    alert(this.text +"----->"+this.file.length)
  }
}
