package snakeyaml;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.yaml.snakeyaml.* ;
import java.util.*;



/**
 * Unit test for simple App.
 */
public class AppTest 
{
	@Test()
	public void test_add() {
		assertThat( App.add( 1, 2 ) , is(3) ) ;
Yaml yaml = new Yaml();
String document = "\n- Hesperiidae\n- Papilionidae\n- Apatelodidae\n- Epiplemidae";
List<String> list = (List<String>) yaml.load(document);
System.out.println(list);
	}
}
