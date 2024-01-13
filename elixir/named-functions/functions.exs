# modules and functions
defmodule MyFunctions do

  # regular functions

  def sum(a,b) do
    IO.puts("#{a} + #{b}")
    a + b
  end

  def subtract(c, d) do
    # subtracts c from d => c-d
    c - d
  end


  # one liner functions

  def sqrt(n), do: n * n


end

IO.puts("ans = #{MyFunctions.sum(10,20)}")
IO.puts("ans = #{MyFunctions.sum(4,7)}")

IO.puts(MyFunctions.sqrt(5)) # parentheses
IO.puts MyFunctions.sqrt 4 # no-parentheses


defmodule MoreFunctions do
  # import
  import MyFunctions

  def add_then_subtract(a, b, c) do
      subtract(sum(a, b), c)
  end

end

IO.puts("result = #{MoreFunctions.add_then_subtract(8,5,4)}")
