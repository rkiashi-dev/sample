puts "====================="
p self
p self.class
puts "====================="
 
class Rabbit
  puts "====================="
  p self
  p self.class
  puts "====================="
 
  def jump
    puts "====================="
    p self
    p self.class
    puts "pyon pyon"
    puts "====================="
  end
end
 
Rabbit.new.jump
