import { Component, Input, OnInit } from '@angular/core';
import { Filef } from 'src/app/shared/sdk';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  @Input() file:Array<Filef>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
