defmodule MyFunctions do
  # functions here
  def sum(a, b) do
    a + b
  end

  def sub(a, b) do
    a - b
  end

  def multi(a, b), do: a * b

  def print_result(f) do
    IO.puts(f.())
  end
end

IO.puts(MyFunctions.sub(4, 7))
IO.puts(MyFunctions.sum(5, 8))
IO.puts(MyFunctions.multi(8, 4))

a = fn -> 42 end

MyFunctions.print_result(a)

square = fn a -> a * a end
IO.puts(square.(4))

# Imports
IO.puts("\n🍕🍕🍕🍕 # Imports — Subtopic 🥟🥟🥟🥟\n")

defmodule DoSomeMath do
  import MyFunctions

  def add_and_subtract(a, b, c) do
    sub(sum(a, b), c)
  end
end

IO.puts(DoSomeMath.add_and_subtract(4, 6, 5))
