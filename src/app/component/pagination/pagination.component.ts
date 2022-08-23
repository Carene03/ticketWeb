import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  #active=0;
  arr:Array<any>=[];
  @Input() set size(size:number|string){
    if(typeof size=="string")
      size=parseInt(size)
    if(size<0) 
      throw "size must >= 0"
      this.arr=new Array<any>(size)
    
  }
  @Input() set active(active:number|string){
    if(typeof active=="string"){
      this.#active=parseInt(active)
    }
    else if(typeof active =="number"){
      if(active<1) 
      throw "size must > 0"
      this.#active=active;

    }
  }
  get active():number{
    return this.#active;
  }

  constructor() { }

  ngOnInit(): void {
  }
  @Input() onPageChange:Function=function(page:number){
    console.log(page +"th page");
    
    
  }
}
