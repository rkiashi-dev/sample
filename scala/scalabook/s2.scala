object S2 {
 def factorial(n: Int): Int = {
	def go(n: Int, acc:Int ): Int =
      if( n <= 0) acc
      else go( n-1, n*acc )

  go( n, 1 )
 }

 def printFmt( fmt: String, x: Int, f :Int => Int )  = {
   println( fmt.format( x, f( x ) ) )
 }

 def main( args: Array[String] ) = {
   printFmt( "factorial( %d ) is %d", 1, factorial ) 
   printFmt( "factorial( %d ) is %d", 2, factorial ) 
   printFmt( "factorial( %d ) is %d", 3, factorial ) 
 }

}

