

object Tut01 {

 def map[A]( x: A )( f: A => A ): A = {
   f( x )
 }
 def map2[A]( x: A, f: A => A ): A = {
   f( x )
 }

 def main( args: Array[String] ) = {
   println( map( 1 )( (x) => x + 1 ) )
//   println( map2( 1 , (x) => x + 1 ) )
   println( map2( 1 , (x: Int) => x + 3 ) )
   
 }

}
