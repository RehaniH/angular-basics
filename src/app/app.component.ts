import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  elements: ServerElement[] = [{ name: 'first server', serverType: 'blueprint' }, 
  { name: 'second server', serverType: 'server' }];


  addServer(serverElement: ServerElement){
    if(serverElement.name){
      this.elements.push(serverElement);
    }
  }
  changeFirstElement(){
    this.elements[0].name = 'Changed'
  }

  deleteFirstElement(){
    this.elements.splice(0, 1);
  }
}

export class ServerElement {
  name!: string;
  serverType !: string;
  content ?: string;

  constructor(){}
}
