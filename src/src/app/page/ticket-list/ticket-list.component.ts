import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AccountApi, AppUserApi, LoopBackAuth, SupportTicketApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  #open=true;
  tickets:Array<any>;
  isAdmin=false;


  @Input() set open(open:boolean){
    this.#open=open;
    // console.log(`get all ${open? "opened":"closed"} tickets`)
  }

  get open(){
    return this.#open;
  }
  constructor(private accountApi:AccountApi,
    private router : Router,
    private route:ActivatedRoute, 
    private auth : LoopBackAuth ,
    private supportTicketApi : SupportTicketApi,
    private us:UserService
  ) { }

  ngOnInit(): void {
    this.accountApi.getRole(3).subscribe((role)=>this.isAdmin=role[0].is==1)
    if(this.auth.getToken().id==null){
      this.router.navigate(['login']);
    } else {
      let param=this.route.snapshot.paramMap.get('id')
      let id=parseInt(param)||this.auth.getCurrentUserId ();
      
      if(!param) {
        this.us.currentIsAdmin.subscribe(data=>{
          if(data==true)
            this.findTicket(id,{status: true});
          else
          this.findTicket(id,{
            appUserId:id, status: true
          });
        })
      } 
      else
        this.us.currentIsAdmin.subscribe(data=>{
          if(data==true)
            this.findTicket(id,{
              appUserId:id, status: true
            });
          else
            this.findTicket(id,{
              appUserId:this.auth.getCurrentUserId (), status: true
            });
        })
    }
  }

  findTicket(id:number,where:any){
    // console.log(id);
    
    this.supportTicketApi.find({
      where:where
    }).subscribe((value) => {
      if (value) this.tickets = value;
      // console.log(value.data);
      
    });
  }

}
