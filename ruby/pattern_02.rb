{Cat: "meow", Dog: "woof", Owl: "hoot-hoot", Rabbit: "boo"}.each do |animal, roar|
  Object.const_set animal, Class.new
 
  Object.const_get(animal).class_eval do
    define_method :speak do |count|
      count.times { puts roar }
    end
  end
end
 
Cat.new.speak(2)
Dog.new.speak(2)
Owl.new.speak(2)
Rabbit.new.speak(2)
