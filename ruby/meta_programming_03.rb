class Rabbit
  def initialize
    @roar = "boo"
  end
 
  def _speak
    puts @roar
  end
 
  def speak
    _speak
  end
end
 
Rabbit.new.speak
