# This passes a, b, c to the superclass
def initialize( a, b, c, d, e, f )
    super( a, b, c )
end

# This passes a, b, c to the superclass
def initialize( a, b, c )
    super
end

# This passes no arguments to the superclass
def initialize( a, b, c)
    super()
end