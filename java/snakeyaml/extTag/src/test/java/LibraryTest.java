import org.junit.Test;
import static org.assertj.core.api.Assertions.*;

/*
 * This Java source file was auto generated by running 'gradle init --type java-library'
 * by 'ope' at '16/02/11 10:37' with Gradle 2.11
 *
 * @author ope, @date 16/02/11 10:37
 */
public class LibraryTest {
	@Test
	public void testLoad() {
		Library lib = new Library() ;
		String tmp = lib.load( "sample.yaml" ) ;
		assertThat( tmp ).isEqualTo( "yyy" ) ;
	}
}
