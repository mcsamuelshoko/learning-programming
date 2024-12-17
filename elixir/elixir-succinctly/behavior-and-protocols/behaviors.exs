# The other interesting feature that resembles functional polymorphism is behaviors.
#* Behaviors provide a way to define a set of functions
# that have to be implemented by a module (a contract)
# and ensure that a module implements all the functions
# in that set.

defmodule TalkingAnimal do
    @callback say(what :: String.t) :: {:ok}
end

defmodule Cat do
    @behaviour TalkingAnimal
    def say(str) do
        "miaooo"
    end
end

defmodule Dog do
    @behaviour TalkingAnimal
    def say(str) do
        "woff"
    end
end

defmodule Factory do
    def get_animal() do
        #can get module from configuration file
        Cat
    end
end

animal = Factory.get_animal()
IO.inspect animal.say("hello") # "miaooo"
