# Macros are language constructs used to write code that generate's new code
# You might be familiar with the concept of metaprogramming and abstract syntax trees;
# macros are what you need to do metaprogramming in Elixir.

quote do: 4 + 5
{:+, [context: Elixir, import: Kernel], [4, 5]}
