class Thing
  def initialize( aName, aDescription )
    @name = aName
    @description = aDescription
  end

  def get_name
    return @name
  end

  def set_name( aName )
    @name = aName
  end

  def get_description
    return @description
  end

  def set_description( aDescription )
    @description = aDescription
  end

end

# Adding the Treasure class

class Treasure < Thing
  def initialize( aName, aDescription, aValue )
    super( aName, aDescription )
      @value = aValue
  end

  def get_value
    return @value
  end

  def set_value( aValue )
    @value = aValue
  end
end