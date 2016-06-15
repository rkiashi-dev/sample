package snakeyaml;

import org.yaml.snakeyaml.* ;
import org.yaml.snakeyaml.constructor.*;
import java.util.* ;
import java.util.stream.* ;

/**
 * Hello world!
 *
 */
public class App 
{
	public static class PersonList {
		public List<Person> person ;
		public PersonList() {
		}
		public PersonList(List<Person> person ) {
			this.person = person ;
		}

		public List<Person> getPersonList() {
			return this.person ;
		}
		public void setPersonList( List<Person> person ) {
			this.person = person ;
		}
	}


    public static void testGetBeanAssumeClass() {
        String data = "--- !!snakeyaml.Person\nfirstName: Andrey\nage: 99";
        Object obj = construct(data);
        Person person = (Person) obj;

		System.out.println( person.getFirstName() ) ;
    }

    private static Object construct(String data) {
        Yaml yaml = new Yaml();
        return yaml.load(data);
    }

	public static void tut1() {
		Yaml yaml = new Yaml();
		String document = "\n- Hesperiidae\n- Papilionidae\n- Apatelodidae\n- Epiplemidae";
		List<String> list = (List<String>) yaml.load(document);
		System.out.println(list);
	}
	public static void tut2() {
		Yaml yaml = new Yaml();
        String data = "--- \nperson: \n- firstName: Andrey\n  age: 99\n- firstName: Bndrey\n  age: 99\n";
		PersonList list = (PersonList) yaml.loadAs(data, PersonList.class);
		System.out.println(list.getPersonList().get(1).getFirstName());
	}
	public static void tut3() {
		Constructor constructor = new Constructor();
		constructor.addTypeDescription(new TypeDescription(PersonList.class, "!plist"));
		Yaml yaml = new Yaml(constructor);
        String data = "--- \n!plist\nperson: \n- firstName: Andrey\n  age: 99\n- firstName: Zndrey\n  age: 99\n";
		PersonList list = (PersonList) yaml.load(data);
		System.out.println(list.getPersonList().get(1).getFirstName());
	}
	public static void tut4() {
		Constructor constructor = new Constructor();
		constructor.addTypeDescription(new TypeDescription(PersonList.class, "!plist"));
		Yaml yaml = new Yaml(constructor);
        String data = "--- \n!plist\nperson: \n- firstName: Andrey\n  age: 99\n- firstName: Zndrey\n  age: 99\n";
               data+= "--- \n!plist\nperson: \n- firstName: Andrey\n  age: 99\n" ;
//        String data = "--- !!snakeyaml.Person\nfirstName: Andrey\nage: 99\n" ;
//               data+= "--- !!snakeyaml.Person\nfirstName: Andrey\n  age: 99\n" ;
		System.out.println( data ) ;
		StreamSupport.stream(
          yaml.loadAll(data).spliterator(), false)
		.map( ( Object x ) ->  {
			return (PersonList)x ;
		} ).forEach( p -> System.out.println( p.getPersonList().get(0).getFirstName() ) ) ;
//		Object list = yaml.loadAll(data);

//		System.out.println(list.getPersonList().get(1).getFirstName());
	}

    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
		tut1() ;
		testGetBeanAssumeClass() ;
		tut2() ;
		tut3() ;
		tut4() ;
    }

	public static int add( int x, int y ) {
		return x+y ;
	}
}
