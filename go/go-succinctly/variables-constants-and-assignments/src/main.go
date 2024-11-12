package main

// Statically vs. dynamically types languages

import (
	"fmt"
)

const (
	prizeDay  = "wednesday"
	prizeFund = 10000
)

func main() {

	var msg string = "Hi mom!"
	fmt.Println(msg)
	// declareAndInit()
	// inferOnDeclare()
	// fixedVarInit()
	scopeExplanation()
	scopedVariables()

}

func declareAndInit() {
	var myVar = "This will use the string data type"
	fmt.Println(myVar)
}

func inferOnDeclare() {
	msg := "hello, golang world!\n"
	fmt.Printf(msg)
}

//! Produces Error
// func brokenVarReInit() {
// 	msg := "hello, world!\n"
// 	msg := 9
// 	fmt.Printf(msg)
// }

func fixedVarInit() {
	msg := "Today's prize winning entry is %d\n"
	winner := 9
	fmt.Printf(msg, winner)
}

// * SUBTOPIC: - Scope

func scopeExplanation() {
	msg := "%s's prize winning entry is %d and wins %d!!!\n"
	winner := 9
	fmt.Printf(msg, prizeDay, winner, prizeFund)
}

func scopedVariables() {
	prizeDay := "Thursday"
	prizeFund := 50000
	msg := "%s's prize-winning entry is %d and wins %d!!!\n"
	winner := 9
	fmt.Printf(msg, prizeDay, winner, prizeFund)
}
