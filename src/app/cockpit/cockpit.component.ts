import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ServerElement } from '../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  // sName = '';
  // serverContent = '';
  @Output('serverAdded') action = new EventEmitter<ServerElement>();
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;

  ngOnInit(): void {
  }

  onClick(serverType: string, serverInputElement: HTMLInputElement){
    const serverElement = new ServerElement();
    serverElement.name = serverInputElement.value;
    serverElement.content = this.serverContent.nativeElement.value;
    serverElement.serverType = serverType;
    this.action.emit(serverElement);
    // this.sName = '';
  }

}
