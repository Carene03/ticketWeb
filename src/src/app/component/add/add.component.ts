import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filef } from 'src/app/shared/sdk';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input() file:Array<Filef>=[]
  @Input() text:String;
  @Output() files:EventEmitter<Array<Filef>>= new EventEmitter();  
  constructor() { }

  ngOnInit(): void {
  }

  pushFile(event:any){
    for(let e of event?.target?.files||[]){
      var temp = new Filef();
      temp.file = e.webkitRelativePath+e.name
      this.file.push(temp);
    }
    this.files.emit(this.file);
  }
}
