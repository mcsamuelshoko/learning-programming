package main

import (
	"fmt"
	"reflect"
)

type rect struct {
	height int
	width  int
}

type Discount struct {
	percent     float32
	promotionId string
}

type ManagersSpecial struct {
	Discount
	extraoff float32
}

type Person struct {
	Name string
}

type Animal struct {
	Sound string
}

type Greeter interface {
	SayHi() string
}

// this method is specific to the Person class
func (p Person) SayHi() string {
	return "Hello! My name is " + p.Name
}

// this method is specific to the Animal class
func (a Animal) SayHi() string {
	return a.Sound
}

/**
*	This method can be called on any type that
* 	implements the Greeter interface
 */
func greet(i Greeter) {
	fmt.Println(i.SayHi())
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

	// Methods
	{

		fmt.Println("-------------------[  METHODS  ]--------------------")
		r := rect{height: 45, width: 80}
		fmt.Printf("Height %d\n", r.height)
		fmt.Printf("width %d\n", r.width)
		fmt.Printf("Area: %d\n", r.area())

		// adding a method that modifies the struct 'instance'
		r.double()
		fmt.Printf("Height: %d\n", r.height)
		fmt.Printf("width : %d\n", r.width)
		fmt.Printf("Area  : %d\n", r.area())
	}

	// Embedded Types
	{

		fmt.Println("-------------------[  EMBEDDED TYPES  ]--------------------")
		normalPrice := float32(99.99)
		januarySale := Discount{15.00, "January"}
		managerSpecial := ManagersSpecial{januarySale, 10.00}

		discountedPrice := januarySale.Calculate(normalPrice)
		managerDiscount := managerSpecial.Calculate(normalPrice)

		fmt.Printf("Original price:        $%4.2f\n", normalPrice)
		fmt.Printf("Discounted Percentage: %2.2f%%\n", januarySale.percent)

		fmt.Printf("Discounted Price:  $%4.2f\n", discountedPrice)
		fmt.Printf("Manager's special: $%4.2f\n", managerDiscount)

	}

	// Interfaces
	{
		man := Person{Name: "Bob Smith"}
		dog := Animal{Sound: "Woof! Woof!"}

		fmt.Println("\nPerson: ")
		greet(man)

		fmt.Println("\nAnimal:	")
		greet(dog)

		// The empty interface
		displayType(42)
		displayType(3.14)
		displayType("Special(non-ascii) Characters: ₩₱₥₾૱؋₭ἒἚἘἐἡἔἛἝῊἿῐΪᾐᾚ")
		displayType(man)

		// Type Assertion
		var anything interface{} = "something"
		aString := anything.(string)
		fmt.Println(aString)

		//! if Go is unable to perform the conversion, it will "panic."
		// aInt := anything.(int)
		// fmt.Println(aInt)

		// protecting against assertion errors
		{
			var anything interface{} = "something"
			aInt, ok := anything.(int)
			if !ok {
				fmt.Println("Cannot turn input into an integer")
			} else {
				fmt.Println(aInt)
			}
		}
	}
}

func (r rect) area() int {
	h := r.height
	w := r.width

	return h * w
}

func (r *rect) double() {
	fmt.Println("\nDouble it!\n")
	r.height *= 2
	r.width *= 2
}

func (d Discount) Calculate(originalPrice float32) float32 {
	return originalPrice - (originalPrice / 100 * d.percent)
}

func (ms ManagersSpecial) Calculate(originalPrice float32) float32 {
	return ms.Discount.Calculate(originalPrice) - ms.extraoff
}

func displayType(i interface{}) {
	switch theType := i.(type) {
	case int:
		fmt.Printf("%d is an integer\n", theType)
	case float64:
		fmt.Printf("%f is a 64-bit float\n", theType)
	case string:
		fmt.Printf("%s is a string\n", theType)
	default:
		fmt.Printf("i don't know what %v is (...might be a `%v`)\n", theType, reflect.TypeOf(theType))

	}
}
