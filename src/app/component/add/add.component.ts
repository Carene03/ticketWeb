import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input() file:Array<File>=[]
  @Input() text:String;
  constructor() { }

  ngOnInit(): void {
  }
  huhu(event:any){
    for(let e of event?.target?.files||[]){
      this.file.push(e)
    }
  }
}
