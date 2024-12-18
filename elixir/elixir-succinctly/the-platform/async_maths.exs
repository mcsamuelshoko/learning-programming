defmodule AsyncMath do
  def start() do
    receive do
      {:sum, [x, y], pid} ->
        send(pid, {:result, x + y})
    end

    start() # we do a recursive call to keep the process awake & in "waiting for message" mode
  end
end
