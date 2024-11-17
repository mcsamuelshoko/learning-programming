package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	fmt.Println("📔, golang control structures!")

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

	{
		// The Switch statement

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
