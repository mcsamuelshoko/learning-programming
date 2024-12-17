defmodule Math do
  @spec sum(integer, integer) :: integer
  def sum(a, b) do
    a + b
  end

  @spec div(integer, integer) :: {:ok, integer} | {:error, String.t()}
  def div(a, b) do
    if b == 0 do
      {:error, "cannot divide by 0"}
    else
      {:ok, trunc(a / b)}
    end
  end
end

IO.puts(Math.div(5, 2))

Math.div(5, 0) |> IO.puts()

defmodule Customer do
  @type entity_id() :: integer()
  @type t :: %Customer{id: entry_id(), first_name: String.t(), last_name: String.t()}

  defstruct id: 0, first_name: nil, last_name: nil
end

defmodule CustomerDao do
  @type reason :: String.t()
  @spec get_customer(Customer.entity_id()) :: {:ok, Customer} | {:error, reason}

  def get_customer(id) do
    # ...
    IO.puts("[🔃]Getting Customer")
  end
end
