defmodule Foo do
  def divide_by_10(value) when value > 0 do
    value/10
  end

  # in this case its when they're numbers & are greater than 0
  def divide_by_10(value) when value > 0 and (is_float(value) or is_integer(value)) do
    value / 10
  end
end


Foo.divide_by_10(0) #!  raises error
