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
