
r = Regexp.new( '[a-z\\200-\\377_]' ) 
p r.encoding
'abc'.index( r, 1 ) 
'/*  テスト */'.encode('US-ASCII').index( r, 1 ) 
