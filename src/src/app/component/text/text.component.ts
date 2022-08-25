import { Component, Input, OnInit } from '@angular/core';
import { Filef, FilefApi, Reply } from 'src/app/shared/sdk';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() self:boolean=false;
  @Input() reply:Reply;
  file:Array<any>=[];
  constructor(private fileF:FilefApi) { }

  ngOnInit(): void {
    this.fileF.find({
      where:{
        recource : Reply.getModelName(),
        recourceId:this.reply.id
      }
    }).
    subscribe((file:Array<any>)=>this.file=file)

  }

}
