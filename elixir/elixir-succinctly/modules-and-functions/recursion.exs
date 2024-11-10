defmodule Factorial do
  def do_it(0) do
    1
  end

  def do_it(n) do
    n*do_it(n - 1)
  end
end
