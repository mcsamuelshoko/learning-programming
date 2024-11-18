package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	fmt.Println("📔, golang control structures!")

	if false { // falsified control-structure to accommodate use of strings for the bottom example
		val1 := os.Args[1]
		val2 := os.Args[2]
		val3 := os.Args[3]
		val4 := os.Args[4]

		fmt.Printf("[INPUT]%s %s %s %s\n", val1, val2, val3, val4)

		{
			fmt.Printf("%s is %s\n", os.Args[1], oddOrEven(os.Args[1]))
			fmt.Printf("%s is %s\n", os.Args[2], oddOrEven(os.Args[2]))
			fmt.Printf("%s is %s\n", os.Args[3], oddOrEven(os.Args[3]))
			fmt.Printf("%s is %s\n", os.Args[4], oddOrEven(os.Args[4]))
		}

		{
			// Looping with the `for` statement
			for i := 1; i < len(os.Args); i++ {
				fmt.Printf("%s is %s\n", os.Args[i], oddOrEven(os.Args[i]))
			}
		}
	}

	{
		// The Switch statement
		numAtoI, numJtoR, numStoZ, numSpaces, numOther := 0, 0, 0, 0, 0
		sentence := os.Args[1]

		for i := 1; i < len(sentence); i++ {
			letter := string(sentence[i])

			switch letter {
			case "a", "b", "c", "d", "e", "f", "g", "h", "i":
				numAtoI += 1
			case "j", "k", "l", "m", "n", "o", "p", "q", "r":
				numJtoR += 1
			case "s", "t", "u", "v", "w", "x", "y", "z":
				numStoZ += 1
			case " ":
				numSpaces += 1
			default:
				numOther += 1
			}
		}

		fmt.Printf("word: `%s`\ncount of AtoI: %d\ncount of JtoR: %d\ncount of StoZ: %d\ncount of spaces: %d\ncount of other: %d\n", os.Args[1], numAtoI, numJtoR, numStoZ, numSpaces, numOther)

		// declarations on switch statements
		gottem := true
		switch deez := gottem; deez {
		case true:
			fmt.Println("Ha! gottem")
		case false:
			fmt.Println("oof, almost gottem")
		}
	}

}

func oddOrEven(value string) string {
	num, _ := strconv.Atoi(value)
	if num%2 == 0 {
		return "even"
	} else {
		return "odd"
	}
}
