var tmp = "abc ref #123,455,6" ;

console.log(
 tmp.replace( /(ref\s*)#(\d+(?:,\d+)*)/, ( function(param, p1, p2){
  var r = "" ;
  p2.split( "," ).forEach( function( v ) {
    if( r != "" ) { r = r + "," ; }
    r = r + "<a href='http://vvv/redmine/issue?" + v + "'>" + v + "</a>" ;
  } )  ;
  return p1 + "#" + r ;
} ) )
) ;
