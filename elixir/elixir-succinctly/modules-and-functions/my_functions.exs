defmodule MyFunctions do
  # functions here
  def sum(a, b) do
    a + b
  end

  def sub(a, b) do
    a - b
  end

  def multi(a, b), do: a * b
end

defmodule DeezOof do
  def print_result(f) do
    IO.puts(f())
  end
end

IO.puts(MyFunctions.sub(4, 7))
IO.puts(MyFunctions.sum(5, 8))
IO.puts(MyFunctions.multi(8, 4))

a = fn -> 42 end

# print_result(a)
