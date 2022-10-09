import {Component, OnInit} from "@angular/core";

@Component({
  selector: '#some',
  styleUrls: ['./some.component.css'],
  template: `<h1>Embedded with in an attribute</h1>`
})
export class SomeComponent implements OnInit{


  ngOnInit(): void {
  }

}
