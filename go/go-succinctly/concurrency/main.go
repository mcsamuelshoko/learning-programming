package main

import (
	"fmt"
	"io"
	"log"
	"math/rand"
	"net/http"
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

func generateLimitedAccountNumber(accountNumberChannel chan int) {
	// internal variable to store last generated account number
	var accountNumber int = 30000001
	for {
		// internal variable to store last generated account number
		if accountNumber > 30000005 {
			close(accountNumberChannel)
			return
		} else {
			accountNumberChannel <- accountNumber
		}

		accountNumber += 1
		// fmt.Println(accountNumber)
	}
}

type WebPage struct {
	URL  string
	Size int
}

type WebPages []WebPage

// implementing the sort.Interface interface in WebPages

func (slice WebPages) Len() int {
	return len(slice)
}

func (slice WebPages) Less(i, j int) bool {
	// Sort of size of response in descending order
	return slice[i].Size < slice[j].Size
}

func (slice WebPages) Swap(i, j int) {
	slice[i], slice[j] = slice[j], slice[i]
}

// Method for adding a new WebPage element to WebPages
func (wp *WebPages) addElement(page WebPage) {
	*wp = append(*wp, page)
}

// called as a goroutine to retrieve the length of each webpage
func getWebPageLength(url string, resultsChannel chan WebPage) {
	res, err := http.Get(url)
	fmt.Println("\t➡️🌐 Getting URL: ", url)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	// get the size of the response body

	size, err := io.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("\t🌐⬇️ Finished reading URL: ", url)

	// populate the WebPage struct and add it to the channel
	var page WebPage
	page.URL = url
	page.Size = len(size)
	resultsChannel <- page
	fmt.Println("\t🌍🌎🌏 completed URL: ", url)

}

func main() {
	// Routines
	if false {
		go message("goroutine")
		message("normal message")
	}

	// Channels
	if false {
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
		if false {
			accountNumberChannel := make(chan int)

			// start the goroutine that generates account numbers
			go generateAccountNumber(accountNumberChannel)

			fmt.Printf("SMITH: %d\n", <-accountNumberChannel)
			fmt.Printf("SINGH: %d\n", <-accountNumberChannel)
			fmt.Printf("JONES: %d\n", <-accountNumberChannel)
			fmt.Printf("LOPEZ: %d\n", <-accountNumberChannel)
			fmt.Printf("CLARK: %d\n", <-accountNumberChannel)

		}

		// limited example
		{
			accountNumberChannel := make(chan int)
			go generateLimitedAccountNumber(accountNumberChannel)

			accountNames := []string{"SMITH", "SINGH", "JONES", "LOPEZ", "CLARK", "ARTHUR", "BENSON"}

			for _, name := range accountNames {
				number, ok := <-accountNumberChannel

				if !ok {
					fmt.Printf("Name: %s , Number: no account number\n", name)
				} else {
					fmt.Printf("Name: %s , Number: %d\n", name, number)
				}
			}
		}

		// Buffered Channels
		{
			//? mychannel := make(chan chanType, capacity)

			if false {
				// un-buffered channel
				c := make(chan int)
				c <- 3 //! error
				fmt.Println("OK.")
			}

			{
				// buffered channel, channel capacity 3
				c := make(chan int, 3)
				c <- 3
				c <- 4
				c <- 5
				// c <- 6
				fmt.Println("OK.")
			}

			// communicating on multiple channels
			if false {
				broadcast2 := func(nsChannel chan int, cChannel chan bool) {
					numbers := []int{
						101,
						102,
						103,
						104,
						105,
						106,
						107,
						108,
						109,
						110,
					}
					i := 0

					for {
						// see the which channel has items

						select {
						/**
						* if numbersChannel is being listened to, take each number
						* sequentially from the slice, and put it into the channel
						*
						 */
						case nsChannel <- numbers[i]:
							i += 1
							/**
							* if we've reached the last number and the channel still
							* being listened to, start reading from the beginning of
							* the slice again
							 */
							if i == len(numbers) {
								i = 0
							}
							/**
							* if we receive a message on the completed channel,
							* we stop transmitting
							 */
						case <-cChannel:
							cChannel <- true
							return
						}
					}
				}

				numbersStation := make(chan int)
				completeChannel := make(chan bool)

				// execute broadcast in a separate thread
				go broadcast2(numbersStation, completeChannel)

				// get 100 numbers from the numbersStation channel
				for i := 0; i < 100; i++ {
					// delay for artistic effect
					time.Sleep(100 * time.Millisecond)
					// retrieve values from the channel
					fmt.Printf("%d\t", <-numbersStation)
				}
				/**
				* once we have received 100 numbers,
				* send a message on completeChannel to tell it to stop
				* transmitting
				 */
				completeChannel <- true
				/**
				* don't terminate the program until we receive
				* a message on the completeChannel
				*
				* Discard the response.
				 */
				<-completeChannel

				/**
				* we only get to here if we received a
				* message on completedChannel
				 */
				fmt.Println("\nTransmission Complete.")

			}

		}

	}

	// Bringing it altogether
	{
		urls := []string{
			"http://www.syncfusion.com",
			"http://www.google.com",
			"http://www.github.com",
			"http://www.apple.com",
			"http://www.golang.org",
		}

		// create a channel
		resultsChannel := make(chan WebPage)

		fmt.Println("⭕ Starting process!")
		// call a goroutine to read each WebPages simultaneously
		for _, url := range urls {
			/**
			* initiate a new goroutine for each URL
			* so that we cn analyze them concurrently
			*
			 */
			fmt.Println("↗️ initiating Routine!: ", url)
			go getWebPageLength(url, resultsChannel)

		}

		// store each WebPage result in WebPages
		results := new(WebPages)
		for range urls {
			result := <-resultsChannel
			results.addElement(result)
			fmt.Println("🎁 Finished WebPage: ", result.URL)
		}

		// sort using the implementation of sort.Interface in WebPages
		for i, page := range *results {
			fmt.Printf("%d %s: %d bytes. \n", i+1, page.URL, page.Size)
		}

		fmt.Println("✅ Finished process!")

	}

}
