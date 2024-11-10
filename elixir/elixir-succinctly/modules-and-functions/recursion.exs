defmodule Factorial do
  def do_it(0) do
    1
  end

  def do_it(n) do
    n * do_it(n - 1)
  end
end

IO.puts(Factorial.do_it(100))

# Tail-call Optimization

defmodule TailCallFactorial do
  def do_it(n) do
    internal_do_it(n, 1)
  end

  defp internal_do_it(0, acc) do
    acc
  end

  defp internal_do_it(n, acc) do
    internal_do_it(n - 1, acc * n)
  end
end

IO.puts("Starting Tail-call Optimized")

IO.puts(TailCallFactorial.do_it(100))