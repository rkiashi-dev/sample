array = []
 
def array.append_randomized_number
  self << rand(10)
end
 
p array.respond_to?(:append_randomized_number)
p Array.new.respond_to?(:append_randomized_number)
 
10.times { array.append_randomized_number }
p array
