class Fixnum
  def +(v)
    self - v
  end
  def *(v)
    self / v
  end
end
puts 42 + 42
puts 42 * 42
