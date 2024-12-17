# types in elixir

# [ elixir uses data types & data structures, and no objects 🙅‍♂️ ]

# integer
a = 10 + 0xc + 1_000 + 0b10
IO.puts(a)

# chars
char = ~c"c"
IO.puts(char)

# strings
b = "hello"
# string concatenation
IO.puts(b <> " e-l-i-x-i-r !")
# string interpolation
IO.puts("Its good to greet with a '#{b}'. ")


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

# lists or enums
l = [1,"hej!", 0x3fa, :thats_an_atom]
#  IO.puts(l)


# tuples
t = {:err, "couldn't find limit"}
# IO.puts(t)


# keyword list (can duplicate keys)
k = [code: 200, status: "ok", status: "done", message: "success"]
# IO.puts(k)


# maps (no duplicate keys)
m = %{a => 404, b => "error"}
# IO.puts(m)


# binary
bin = <<100,154, 165>>
# IO.puts(bin)

# range

r = 1..a
# IO.puts(r)
