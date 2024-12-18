defmodule AsyncMath do
  def start() do
    receive do
      {:sum, [x, y], pid} ->
        send(pid, {:result, x + y})
    end

    start() # we do a recursive call to keep the process awake & in "waiting for message" mode
  end
end

pid = spawn(AsyncMath, :start,[])

send(pid,{:sum, [5, 4], self()})
send(pid, {:sum, [3, 9], self()})

#iex> flush

pid = spawn(AsyncMath, :start, [])
send pid, {:sum, [5,6], self()}

receive do
  {:result, x} -> IO.puts x
end

# though this implementation is raw & primal, OTP is more suited in production
