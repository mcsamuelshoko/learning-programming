user = %{
  name: "Enoch",
  lang: "DE"
}

defmodule UserLang do
  def get_language(u) do
    u.lang
  end
end

# use UserLang;

welcome_message =
  case UserLang.get_language(user) do
    "IT" -> "Benvenuto #{user.name}"
    "ES" -> "Bienvenido  #{user.name}"
    "DE" -> "Willkommen #{user.name}"
    _ -> "Welcome"
  end

IO.puts(welcome_message)
