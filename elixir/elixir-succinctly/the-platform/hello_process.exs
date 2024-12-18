# The real power of Elixir is the platform itself.

defmodule HelloProcess do
  def say(name) do
    IO.puts "Hello #{name}"
  end
end

HelloProcess.say("adam")

spawn(HelloProcess, :say,["Odom"])

# Using a PID to inspect a process status using the Process module.
pid = spawn(HelloProcess, :say,["Ada"])
Process.alive?(pid)
|> IO.puts

# We need to do some calculation that we can spawn to another
# process to keep the main process free

defmodule AsyncMath do
  def sum(a,b) do
    a + b
  end
end

pid = spawn(AsyncMath, :sum,[1,3])
Process.alive?(pid) |> IO.puts
