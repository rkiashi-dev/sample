package sample.jackson;

import org.junit.Test;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class HogeTest {

 @Test
 public void testAA() throws Exception {
          Hoge hoge = new Hoge();
        hoge.id = 10;
        hoge.name = "hoge";

System.out.println( "abc" ) ;

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(hoge);

        System.out.println(json);
   
 }

}
