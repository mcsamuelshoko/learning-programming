defmodule Math do
  @spec sum(integer, integer)::integer
  def sum(a,b) do
    a + b
  end

  @spec div(integer, integer)::{:ok, integer}|{:error,String.t}
  def div(a,b) do
    if b == 0 do
      {:error, "cannot divide by 0"}
    else
      {:ok,  trunc(a/b)}
    end
  end
end

IO.puts Math.div(5,2)

Math.div(5,0) |> IO.puts
