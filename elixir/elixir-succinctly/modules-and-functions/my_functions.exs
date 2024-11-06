defmodule MyFunctions do
  # functions here
  def sum(a, b) do
    a + b
  end

  def sub(a, b) do
    a - b
  end


end

# def print_result(f) do
#   IO.puts(f())
# end

def multi(a, b), do: a * b

IO.puts(MyFunctions.sub(4, 7))
IO.puts(MyFunctions.sum(5, 8))
IO.puts(multi(8,4))
