test_conditional = false

a =
  if test_conditional do
    # true case
    IO.puts("thats absolutely #{test_conditional}")
  else
    # false case
    IO.puts("oof, thats #{test_conditional}")
  end


IO.puts("Okay, your bizarre statement is a = #{a}")
