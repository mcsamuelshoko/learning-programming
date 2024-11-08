# Pattern Matching

a = 3
# ^a = 4 #! error

# Pattern matching in functions

defmodule Bot do
    def greet("") do
        IO.puts("No name to greet")
    end

    def greet(name) do
        IO.puts("Hello #{name}")
    end
end

Bot.greet("")
Bot.greet("mom")
