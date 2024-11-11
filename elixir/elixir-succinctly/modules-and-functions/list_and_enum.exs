defmodule ListUtils do
    def sum([]) do
        0
    end

    def sum([h|t]) do
        h + sum(t)
    end
end

IO.puts ListUtils.sum([1,4,5,6,7,10])

defmodule MapMod do

end

book = % {
    title: "Programming Elixir",
    author: %{
        first_name: "Dave",
        last_name: "Thomas"
    },
    year: 2018
}

IO.puts book[:title]