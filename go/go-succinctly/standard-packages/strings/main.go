package main

import (
	"fmt"
	"strings"
)

func main() {

	fmt.Println(
		// does "test" contain "es"
		strings.Contains("test", "es"),

		// does "deez" start with "d"
		strings.HasPrefix("deez", "d"),

		// does "halla" and with "la"
		strings.HasSuffix("halla", "la"),

		// how many times is "w" in woolworths
		strings.Count("woolworths", "w"),

		//at what position is "e" in "best"
		strings.Index("best", "e"),

		// join "sigma" and "aura"
		strings.Join([]string{"sigma", "aura"}, " "),

		// repeat "ha", 6 times
		strings.Repeat("ha", 6),

		// replace"gggg" with the first two non-overlapping
		// instances of "a" replaced by "b"
		strings.Replace("gggg", "a", "b", 2),

		// put "a-b-c-d-e" into a slice using
		// "-" as a delimiter
		strings.Split("a-b-c-d-e", "-"),

		// put "NICE ONE BRUV!" in lower case
		strings.ToLower("NICE ONE BRUV!"),

		// put "aah i see, thanks :)" to upper case
		strings.ToUpper("aah i see, thanks :)"),
	)

}
