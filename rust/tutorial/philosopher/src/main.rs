struct Philosopher {
	name: String, 
}


impl Philosopher {
	fn new( name : &str) -> Philosopher {
		Philosopher {
			name: name.to_string()
		}
	}

	fn eat(&self) {
		println!( "{} is eating.", self.name ) ;
	}
}

fn main() {
	let p1 = Philosopher::new( "p1" ) ;
	p1.eat() ;
}
