class Dog
  def set_name( aName )
    @myName = aName
  end
end

# create object instances

mydog = Dog.new
yourdog = Dog.new

# Call the method to give them names

mydog.set_name( "Fido" )
yourdog.set_name( "Bonzo" )