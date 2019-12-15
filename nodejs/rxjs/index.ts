import * as Rx from 'rxjs';
import * as RxOpe from 'rxjs/operators';

//const source = Rx.interval(1000);
//const example = source.pipe(RxOpe.sample(Rx.interval(3000)));
//const source = Rx.of(1,2,3,4,5);
//const example = source.pipe(RxOpe.sample(Rx.interval(1000)));

//const example =  Rx.interval(1000).pipe( RxOpe.takeWhile( val => val < 4 ) );

const sources = [ 
 Rx.interval(1000).pipe( RxOpe.takeWhile( val => val < 4 ) ),
 Rx.interval(2000).pipe( RxOpe.takeWhile( val => val < 10 ) )
] ;

Rx.concat( ...sources )
 .pipe( RxOpe.takeWhile(val => val < 3 ))
 .subscribe( val => console.log( val ) ) ;

//const subscribe = example.subscribe(val => console.log(val));

