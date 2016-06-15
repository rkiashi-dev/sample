import java.util.* ;
import java.io.* ;
import com.github.mustachejava.* ;
import org.junit.*; 

public class SampleTest {

	public class InnerSample {
		public List<String> item() {
			ArrayList<String> aa = new ArrayList<String>() ;
			aa.add( " a" ) ;
			aa.add( " b" ) ;
			return aa ;
		}
	}


	@Test
	public void sample_test01() throws Exception {
		
		MustacheFactory mf = new DefaultMustacheFactory();
	    Mustache mustache = mf.compile(new StringReader("{{{item}}}"), "sample" );
		Writer writer = new OutputStreamWriter(System.out);
	    mustache.execute(writer, new InnerSample());
		writer.flush();
	}


}
