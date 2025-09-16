class Treasure
  def initialize( aName, aDescription )
    @name = aName
    @description = aDescription
  end

  def to_s # override default to_s method
    "The #{@name} Treasure is #{@description}\n"
  end
end

puts( Class.to_s)
puts( Object.to_s )
puts( String.to_s )
puts( 100.to_s )
puts( Treasure.to_s )


# Create Treasure object

t = Treasure.new( "Sword", "A lovely Elvish weapon" )
puts(t.to_s)
puts(t.inspect)