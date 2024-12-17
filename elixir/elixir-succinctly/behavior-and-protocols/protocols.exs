# Functional Programming languages can have polymorphism too
#* Elixir uses behavior and protocols to build polymorphic programs
# Protocols apply to data types,
# and give us a way to apply a function to a type.

defprotocol Printable do
  def to_csv(data)
end

# Implementing for a Map
defimpl Printable, for: Map do
  def to_csv(map) do
    Map.keys(map)
    |> Enum.map(fn k -> map[k] end)
    |> Enum.join(",")
  end
end

author = %{first_name: "Dave", last_name: "Thomas"}
IO.puts Printable.to_csv(author)

# Implementing for a List
defimpl Printable, for: List do
  def to_csv(list) do
    Enum.map(list, fn item -> Printable.to_csv(item) end)
  end
end

author1 = %{first_name: "Dave", last_name: "Thomas"}
author2 = %{first_name: "Kent", last_name: "Beck"}
author3 = %{first_name: "Martin", last_name: "Fowler"}
author4 = %{first_name: "Mc Samuel", last_name: "Shoko"}

IO.puts Printable.to_csv [author1, author2, author3, author4]

# Implementing for integers
defimpl Printable, for: Integer do
  def to_csv(i) do
    to_string(i)
  end
end

IO.puts Printable.to_csv([1,2,3,4,5,6,7])
