import * as Rx from 'rxjs';
import * as RxOpe from 'rxjs/operators';

//const source = Rx.interval(1000);
//const example = source.pipe(RxOpe.sample(Rx.interval(3000)));
//const source = Rx.of(1,2,3,4,5);
//const example = source.pipe(RxOpe.sample(Rx.interval(1000)));

//const example =  Rx.interval(1000).pipe( RxOpe.takeWhile( val => val < 4 ) );

/*
Rx.concat(
 Rx.interval(1000).pipe( RxOpe.takeWhile( val => val < 4 ) ),
 Rx.interval(2000).pipe( RxOpe.takeWhile( val => val < 10 ) )
).
 pipe( RxOpe.takeWhile(val => val < 3 ))
 .subscribe( val => console.log( val ) ) ;
*/

//const subscribe = example.subscribe(val => console.log(val));

function abc(): Rx.Observable<any> {
  return new Rx.Observable<any>( (observer)=> {
     console.log('next');
     observer.next(true) ;
      setTimeout( () => {
     	 console.log('complete');
         observer.complete() ;
      },3000 ) ;
  } ) ;
}

function eee(): Rx.Observable<any> {
  return new Rx.Observable<any>( (observer)=> {
     console.log('next');
     observer.next(true) ;
      setTimeout( () => {
     	 console.log('err');
         observer.error( 'eee' ) ;
      },3000 ) ;
  } ) ;
}

function zzz(): Rx.Observable<any> {
  return new Rx.Observable<any>( (observer)=> {
     console.log('next');
     observer.next(true) ;
  } ) ;
}

Rx.concat.apply( null, [
  Rx.of(1, 2, 3).pipe(RxOpe.delay(3000)),
  abc(),    // continue
  //eee(),  // error 
  //zzz(), // stop
  Rx.of(4, 5, 6)
  ]
)
  .subscribe(console.log);

