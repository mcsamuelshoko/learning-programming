defmodule Rover.Web.Router do
  use Plug.Router

  plug(Plug.Parsers, parsers: [:json], json_decoder: Poison)
  plug(:match)
  plug(:dispatch)

  get "/ping" do
    send_resp(conn, 200, Poison.encode!(%{message: "pong"}))
  end

  match(_) do
    send_resp(conn, 404, "")
  end

  post "/rover" do
    rover_name = conn.body_params["name"]
    x = conn.body_params["x"]
    y = conn.body_params["y"]
    d = String.to_atom(conn.body_params["d"])

    case RoverSupervisor.create_rover(name, x, y, d) do
      {:ok, _} -> send_resp(conn, 201, encode(%{message: "created rover #{rover_name}"}))
      {:error, {:already_started, _}} -> send_resp(conn, 400, encode(%{message: "rover already exists"}))
      _ -> send_resp(conn, 500, encode(%{message: "generic error"}))
    end
  end

  post "/command" do
    rover_name = conn.body_params["name"]
    command = String.to_atom(conn.body_params["command"])
    Rover.send_command(rover_name, command)
    send_resp(conn, 204, encode(%{}))
  end
end
