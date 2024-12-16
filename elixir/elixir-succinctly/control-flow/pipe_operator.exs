# Suppose we want to filter a list to obtain only values
# greater than 5, and to these values we have to add 10,
# sum all the values, and finally, print the result to
# the terminal

# ? The classic way to do this could be:

IO.puts(
    Enum.reduce(
        Enum.map(Enum.filter([1, 3, 5, 7, 8, 9], fn x -> x > 5 end), fn x -> x + 10 end),
        fn acc, x -> acc + x end
    )
)

[1, 3, 5, 7, 8, 9]
|> Enum.filter(fn x -> x > 5 end)
|> Enum.map(fn x -> x + 10 end)
|> Enum.reduce(fn acc, x -> acc + x end)
|> IO.puts()

# just had to repeat it as it was in the book lol,....
# i have no idea its different from the one above

[1,3,5,7,8,9]
|> Enum.filter(fn x -> x > 5 end)
|> Enum.map(fn x -> x + 10 end)
|> Enum.reduce(fn acc, x -> acc + x end)
|> IO.puts
