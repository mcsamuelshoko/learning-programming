# types in elixir

# [ elixir uses data types & data structures, and no objects 🙅‍♂️ ]

# integer
a = 10 + 0x2 + 10_00 + 0b10
IO.puts(a)

# chars
char = ~c"c"
IO.puts(char)

# strings
b = "hello"
IO.puts(b <> " e-l-i-x-i-r !")

# floats
c = 0.5578
IO.puts(c)

# boolean
d = false
IO.puts(d)

# atoms
:an_atom
IO.puts(:an_atom)

# multiline string
e = """
####################################
##      CONTAINER TYPES          ###
####################################
"""
# IO.puts(e)

#lists or enums
l = [1,"hej!", 0x3fa, :thats_an_atom]
#  IO.puts(l)

#tuples
t = {:err, "couldn't find limit"}
# IO.puts(t)
