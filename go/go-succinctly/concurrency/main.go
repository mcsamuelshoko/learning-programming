package main

import (
	"fmt"
	"strconv"
	"time"
)

func message(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println("[" + strconv.Itoa(i) + "] " + s)
	}
}

func main() {
	go message("goroutine")
	message("normal message")
}
