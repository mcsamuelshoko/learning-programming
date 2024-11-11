defmodule ListUtils do
  def sum([]) do
    0
  end

  def sum([h | t]) do
    h + sum(t)
  end
end

IO.puts(ListUtils.sum([1, 4, 5, 6, 7, 10]))

defmodule MapMod do
end

book = %{
  title: "Programming Elixir",
  author: %{
    first_name: "Dave",
    last_name: "Thomas"
  },
  year: 2018
}

IO.puts(book[:title])

# trying to change an immutable value
#! book[:title] = "Programming Java"

# proper way
book1 = Map.put(book, :title, "Programming Elixir >=1.6")
IO.puts(book1[:title])

new_book = %{
  book| title: "Programming Elixir >=1.7"
}

IO.puts new_book[:title]

{:ok,x} = Map.fetch(book,:year)
IO.puts "The book year is: #{x}"
