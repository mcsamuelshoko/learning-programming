defmodule Rover do
  use GenServer

  defstruct [:x, :y, :direction, :name]

  def start_link({x, y, d, name}) do
    GenServer.start_link(__MODULE__, {x, y, d, name}, name: String.to_atom(name))
  end

  def init({x, y, d, name}) do
    {:ok, %Rover{x: x, y: y, direction: d, name: name}}
  end

  def get_state(name) do
    GenServer.call(String.to_atom(name), :get_state)
  end

  def handle_call(:get_state, _from, state) do
    {:reply, {:ok, {state.x, state.y, state.direction, state.name}}, state}
  end

  @world_width 100
  @world_height 100

  def go_forward(name) do
    GenServer.cast(RegistryHelper.create_key(name), :go_forward)
  end

  def handle_cast(:go_forward, state) do
    new_state = case state.direction do
      :N -> %Rover{ state | x: state.x, y: mod(state.y + 1, @world_height) }
      :S -> %Rover{ state | x: state.x, y: mod(state.y - 1, @world_height) }
      :E -> %Rover{ state | x: mod(state.x + 1, @world_width), y: state.y }
      :W -> %Rover{ state | x: mod(state.x - 1, @world_width), y: state.y }
    end
    {:noreply, new_state}
  end

end
