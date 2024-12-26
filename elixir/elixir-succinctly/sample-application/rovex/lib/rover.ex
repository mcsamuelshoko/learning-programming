defmodule Rover do
  use GenServer

  def start_link({x, y, d, name}) do
    GenServer.start_link(__MODULE__, {x, y, d, name}, name: String.to_atom(name))
  end

  def init({x, y, d, name}) do
    {:ok, %{}}
  end

end
