# Macros are language constructs used to write code that generate's new code
# You might be familiar with the concept of metaprogramming and abstract syntax trees;
# macros are what you need to do metaprogramming in Elixir.

#* Macros, metaprogramming, and abstract syntax trees (AST) are all related
# An AST is a representation of code, and in Elixir, an AST is represented as a tuple.

#? To view an AST, we can use the instruction quote:

quote do: 4 + 5
{:+, [context: Elixir, import: Kernel], [4, 5]}

#? The tuple respresents the function that sums 4 to 5.
# As a tuple, it is data, but it is also code because we can execute it:

Code.eval_quoted({:+, [context: Elixir, import: Kernel], [4,5]})

# Lets see how we can use an AST to create a macro

defmodule Logger do
  defmacro log(msg) do
    if is_log_enabled() do
      quote do
        IO.puts("> From log: #{unquote(msg)}")
      end
    end
  end
end
