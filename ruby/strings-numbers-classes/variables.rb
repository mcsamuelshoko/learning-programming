localvar = "hello"
$globalvar = "goodbye"

def amethod
  puts "[amethod]"
  localvar = 10
  puts( localvar )
  puts( $globalvar )
end

def anotherMethod
  puts "[anotherMethod]"
  localvar = 500
  $globalvar = "bonjour"
  puts( localvar )
  puts( $globalvar )
end

# calling the methods
amethod
anotherMethod
amethod
puts( localvar )