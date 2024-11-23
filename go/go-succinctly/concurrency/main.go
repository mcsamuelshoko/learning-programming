package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"
)

func message(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println("[" + strconv.Itoa(i) + "] " + s)
	}
}

func broadcast(c chan int) {
	// infinite loop to create rndom numbers
	for {
		/**
		* generate a random number 0 - 999
		* and put it into the channel
		 */

		c <- rand.Intn(999)
	}
}

func generateAccountNumber(accountNumberChannel chan int) {
	// interval variable to store last generated account number
	var accountNumber int
	accountNumber = 30000001

	for {
		accountNumberChannel <- accountNumber
		// increment the account number by 1
		accountNumber += 1
	}
}

func main() {
	// Routines
	if false {
		go message("goroutine")
		message("normal message")
	}

	// Channels
	{
		if false {
			numbersStation := make(chan int)
			// execute broadcast in a seperate thread
			go broadcast(numbersStation)
			// retrieve values from the channel
			for num := range numbersStation {
				// delay for artistic effect only
				time.Sleep(1000 * time.Millisecond)

				fmt.Printf("%d ", num)
			}
		}

		// Better example
		{
			accountNumberChannel := make(chan int)

			// start the goroutine that generates account numbers
			go generateAccountNumber(accountNumberChannel)

			fmt.Printf("SMITH: %d\n", <-accountNumberChannel)
			fmt.Printf("SINGH: %d\n", <-accountNumberChannel)
			fmt.Printf("JONES: %d\n", <-accountNumberChannel)
			fmt.Printf("LOPEZ: %d\n", <-accountNumberChannel)
			fmt.Printf("CLARK: %d\n", <-accountNumberChannel)

		}

	}

}
