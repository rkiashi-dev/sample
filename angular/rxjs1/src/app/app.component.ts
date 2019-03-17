import { Component, OnInit } from '@angular/core';
import { ObservableInput, Observable, Observer, of, pipe, forkJoin } from 'rxjs' ;
import { concat, merge } from 'rxjs/index' ;
import { filter } from 'rxjs/operators' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs1';

  ngOnInit() {
    console.log( 'Hello' ) ;
    let a = of( 1, 2 ) ; 
//	subscribe( (x) => { console.log( x ) } ) ;

    let b = new Observable( (observer) => { setTimeout( ()=>{ observer.next(999) ;  observer.complete() ;}, 1000 ) ; } ) ;
//    b.subscribe( (x) => { console.log( x ) } ) ;
    let c = new Observable( (observer) => { setTimeout( ()=>{ observer.next(888) ; observer.complete() ; }, 100 ) ; } ) ;

   // concat( b, c, a ).subscribe( (x) => { console.log( x ) } ) ;
   // merge( b, c, a ).subscribe( (x) => { console.log( x ) } ) ;
   let z: ObservableInput<any>[] = [] ;
   z.push( b ) ;
   z.push( c ) ;
   z.push( a ) ;
//   forkJoin( z ).pipe( filter( (x) => { return x > 1 ; } ) ).subscribe( (x) => { console.log( x ) } ) ;
//   concat( z ).subscribe( (x) => { console.log( x ) } ) ;
   //concat( concat( b, c ), a ).subscribe( (x) => { console.log( x ) } ) ; 
//   merge( concat( b, c ), a ).subscribe( (x) => { console.log( x ) } ) ; 
  merge.apply( null, z ).subscribe( (x) => { console.log( x ) } )  ;

  }
}
