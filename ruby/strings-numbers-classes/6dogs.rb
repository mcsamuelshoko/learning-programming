class Dog
  def set_name( aName )
    @myName = aName
  end

  def get_name
    return @myName
  end

  def talk
    return 'woof!'
  end
end

# create object instances

mydog = Dog.new
yourdog = Dog.new

# Call the method to give them names

# mydog.set_name( "Fido" )
yourdog.set_name( "Bonzo" )

# create dog, name it, display its name, and ask it to talk:

mydog = Dog.new
mydog.set_name( 'Fido' )
puts(mydog.get_name)
puts(mydog.talk)