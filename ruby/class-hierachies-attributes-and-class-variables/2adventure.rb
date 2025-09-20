class Thing
  attr_reader( :name, :description )
  attr_writer :description

  def initialize( aName, aDescription )
    @name = aName
    @description = aDescription
  end

end

# Adding the Treasure class

class Treasure < Thing

  attr_accessor :value

  def initialize( aName, aDescription, aValue )
    super( aName, aDescription )
      @value = aValue
  end

  def to_s  # override default to_s method
    return "(Thing.to.s):: The #{@name} Thing is #{@description}"
  end

end
