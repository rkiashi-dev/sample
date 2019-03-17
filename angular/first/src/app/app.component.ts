import { Component, Output, EventEmitter, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ' {{title}} <child-app (ev)="onEv($event)"></child-app>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';

  onEv( event: String ) {
   console.log( event ) ;
  }
}

@Component({
  selector: 'child-app',
  template: '<h1>childapp</h1><button (click)="onClick()">Yes</button>',
  styleUrls: ['./childapp.component.scss']
})
export class ChildAppComponent {
  @Output()
  ev = new EventEmitter<any>();

  onClick() {
   this.ev.emit("aaa");
   console.log("onClick");
  }
}
