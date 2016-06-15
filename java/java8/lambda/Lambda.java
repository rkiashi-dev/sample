import java.util.* ;
import java.util.function.* ;

public class Lambda {

public static void main( String... args ) {

 System.out.println( "Hello,World!" ) ;

 List<Integer> arr = Arrays.asList( 10,20,30,40,50 ) ;
 arr.stream()
 .peek( System.out::println )
 .map( x ->  x + 1 )
 .forEach( System.out::println ) ;

}


}
