import {
  Component, Input, ViewEncapsulation,
  OnInit,
  OnChanges, SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  OnDestroy,
  ContentChild
} from '@angular/core';
import { ServerElement } from '../app.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class ServerComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {

  color = 'red';
  @Input() serverElement!: ServerElement;
  @Input() name: string;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ContentChild('serverContent', {static: true}) serverContent: ElementRef;
  constructor() {
    console.log('constructor called');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('content', this.header.nativeElement.textContent);
    console.log('paragraph content', this.serverContent.nativeElement.textContent);
  }

  ngOnChanges(simpleChanges: SimpleChanges):void{
    console.log('ngOnChanges called')
    console.log(simpleChanges)
  }

  ngDoCheck(){
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    console.log('paragraph content', this.serverContent.nativeElement.textContent);
  }

  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(): void {
    if(this.serverElement){
      this.color = this.serverElement.serverType === 'blueprint' ? 'blue': 'pink';
    }
    console.log('ngAfterViewInit called')
    console.log('content', this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('--------------')
    console.log('ngOnDestroy called')
  }

}
