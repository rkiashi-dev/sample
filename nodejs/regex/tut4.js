
var msg = '[CA20664] [fffffff] [CS11841] ' ;

var usrtbl = {
  CA20664: '中原さん',
  GB3P207: '菅野さん',
  CA19411: '海掘さん',
  CA20605: '相沢さん',
  CS11880: '平子さん',
  CS11841: '天野さん',
  GB3P208: '杉山さん',
  CS11833: '町田さん'
};

console.log( msg ) ;

console.log(
msg.replace(/\[([0-9a-zA-Z]+)\]/g, function rep(p,p1) {
   if( usrtbl[p1] === undefined ) { return p1 ; }
   return usrtbl[p1];
})

) ;



