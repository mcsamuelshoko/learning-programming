package main

import (
	"fmt"
)

type rect struct {
	height int
	width  int
}

func main() {
	// Pointers
	{
		fmt.Println("-------------------[  POINTERS  ]--------------------")
		a, b := 20, 71

		// pointer to a
		p := &a

		// read via the pointer
		fmt.Printf("Value of a is : %d\n", *p)

		// set `a` via the pointer
		*p = 21

		// display the new value of `a`
		fmt.Printf("New value of a is: %d\n", a)

		// pointer to b
		p = &b

		// read b via the pointer
		fmt.Printf("Value of b is: %d\n", *p)

		// add 10 to b via its pointer
		*p = *p + 10

		// display the new value of b
		fmt.Printf("New value of b is: %d\n", b)
	}

	//Structs
	{
		fmt.Println("-------------------[  STRUCTS  ]--------------------")
		r := rect{height: 12, width: 20}
		fmt.Printf("Height: %d\nwidth: %d\n", r.height, r.width)

		// getting a pointer to the actual structure
		r1 := rect{height: 53, width: 98}
		r0 := rect{343, 567}

		myRectangle := &rect{
			height: 45,
			width:  85,
		}

		// creating an instance of a structure & return a pointer
		var myRectangle0 *rect
		myRectangle0 = new(rect)

		fmt.Println(r1, r0)
		fmt.Println(myRectangle, myRectangle0)

		// assigning using dot notation
		r.height = 36
		r.width = 45

	}
}
