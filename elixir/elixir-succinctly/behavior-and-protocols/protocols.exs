# Functional Programming languages can have polymorphism too
#* Elixir uses behavior and protocols to build polymorphic programs
# Protocols apply to data types,
# and give us a way to apply a function to a type.

defprotocol Printable do
  def to_csv(data)
end
