import { Component, Input, OnInit } from '@angular/core';
import { Reply } from 'src/app/class/reply';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() self:boolean=false;
  @Input() reply:any|Reply;
  
  constructor() { }

  ngOnInit(): void {
  }

}
