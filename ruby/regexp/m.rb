
#r = Regexp.new( '[a-z\\200-\\377_]' ) 
#r = Regexp.new( '[a-z_]'.force_encoding('UTF-8'),Regexp::FIXEDENCODING ) 
r = Regexp.new( '[a-z_]' )
p r.encoding
#'abc'.index( r, 1 ) 
#'/*  テスト */'.encode('US-ASCII').index( r, 1 ) 
p '/*  テスト */'.index( r, 1 ) 
