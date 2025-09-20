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

  def description
    return @description
  end

  def description=( aDescription )
    @description = aDescription
  end

end