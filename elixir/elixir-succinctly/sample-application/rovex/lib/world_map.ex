defmodule WorldMap do
  use GenServer

  def start_link(_) do
    {:ok, %{rovers: []}}
  end

  def update_rover(name, x, y) do
    GenServer.call(__MODULE__, {:update_rover, name, x, y})
  end

  defp update_rover_lists(rovers, name, x, y) do
    case Enum.find_index(rovers, fn r -> r.name === name end) do
      nil -> rovers ++ [%{name: name, x: x, y: y}]
      index -> List.replace_at(rovers, index, %{name: name, x: x, y: y})
    end
  end

  def handle_call({:update_rover, name, x, y}, _from, state) do
    rover_list = update_rover_list(state.rovers, name, x, y)


    case Enum.find(rover_list, fn r -> r.name != name && r.x == x && r.y == y end) do
      nil ->
        {:reply, :ok, %{state | rovers: rover_list}}
      rover_to_kill ->
        RoverSupervisor.kill(rover_to_kill)
        new_rovers = List.delete(rover_list, rover_to_kill)
        {:reply, :ok, %{state | rovers: new_rovers}}
    end
  end

end
