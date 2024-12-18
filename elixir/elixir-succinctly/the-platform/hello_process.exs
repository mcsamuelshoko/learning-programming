# The real power of Elixir is the platform itself.

defmodule HelloProcess do
  def say(name) do
    IO.puts "Hello #{name}"
  end
end

HelloProcess.say("adam")

spawn(HelloProcess, :say,["adam"])
