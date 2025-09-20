class Thing

  attr_reader :description
  attr_writer :description
  attr_writer :name

  def initialize
    @name = aName
    @description = aDescription
  end

  # get accessor for @name
  def name
    return @name.capitalize
  end

end
