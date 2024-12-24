defmodule MyServer do
  use GenServer

  def init(_) do
    {:ok, []}
  end

  def start_link([]) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def ping do
    GenServer.call(__MODULE__, :ping)
  end

  def handle_call(:ping, _from, state) do
    {:reply, :pong, state}
  end
end
