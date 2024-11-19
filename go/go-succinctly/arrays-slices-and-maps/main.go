package main

import (
	"fmt"
)

func main() {
	// Arrays
	{
		total := 0
		mean := 0
		rainfallStats := [5]int{1091, 2010, 995, 1101, 1111}

		for _, value := range rainfallStats {
			total += value
		}
		mean = total / len(rainfallStats)
		fmt.Printf("Average rainfall: %d mm\n", mean)

		// Multidimensional Arrays
		var arr = [5][2]int{{0, 0}, {2, 4}, {1, 3}, {5, 7}, {6, 8}}

		for i := 0; i < 5; i++ {
			for j := 0; j < 2; j++ {
				fmt.Printf("arr[%d][%d] = %d\n", i, j, arr[i][j])
			}
		}

		// passing arrays as function parameters (pass by value)
		myArray := [...]string{"Apples", "Oranges", "Bananas"}
		fmt.Printf("Initial array values: %v\n", myArray)

		myFunctionArray(myArray)
		fmt.Printf("Final array values: %v\n", myArray)
	}

	// Slices
	{
		fruits := [...]string{"apples", "oranges", "bananas", "kiwis"}

		fmt.Printf("%v\n", fruits[1:3])
		fmt.Printf("%v\n", fruits[0:2])
		fmt.Printf("%v\n", fruits[:3])
		fmt.Printf("%v\n", fruits[2:])
	}

	// Passing by reference/pointer
	{
		mySlice := []string{"Apples", "Oranges", "Bananas"}
		fmt.Printf("Initial slice values: %v\n", mySlice)
		myFunction(mySlice)
		fmt.Printf("Final slice values: %v\n", mySlice)
	}

	// Initializing slices using built in `make()` function
	{
		mySlice := make([]int, 4, 8)
		fmt.Printf("initial Length %d\n", len(mySlice))
		fmt.Printf("Capacity: %d\n", cap(mySlice))
		fmt.Printf("Contents: %v\n", mySlice)
	}

	// Exceeding the slice capacity (using append method)
	{
		mySlice := make([]int, 0, 8)
		mySlice = append(mySlice, 1, 3, 5, 7, 9, 11, 13, 17)
		fmt.Printf("Contents: %v\n", mySlice)
		fmt.Printf("Number of items: %d\n", len(mySlice))
		fmt.Printf("Capacity: %d\n", len(mySlice))

		mySlice = append(mySlice, 19)
		fmt.Printf("Contents: %v\n", mySlice)

		fmt.Printf("Number of items: %d\n", len(mySlice))
		fmt.Printf("Capacity: %d\n", cap(mySlice))
	}

	// Exceeding the slice capacity but using the array indexing method
	{
		mySlice := make([]int, 0, 8)
		mySlice = append(mySlice, 1, 3, 45, 5, 65, 76, 343, 6)

		fmt.Printf("Contents: %v\n", mySlice)
		fmt.Printf("Number of items: %d\n", len(mySlice))
		fmt.Printf("Capacity: %d\n", cap(mySlice))

		// mySlice[8] = 19 //! uncomment this line statement to see the error
		fmt.Println("Contents: %v\n", mySlice)
		fmt.Printf("Number of Items: %d\n", len(mySlice))
		fmt.Printf("Capacity: %d\n", cap(mySlice))
	}

	// Copying a slice in go
	{
		mySlice := make([]int, 0, 8)
		mySlice = append(mySlice, 1, 33, 977, 376, 133, 331998, 976, 16)

		mySliceCopy := make([]int, 8)
		copy(mySliceCopy, mySlice)

		mySliceCopy[3] = 93794
		fmt.Printf("mySlice: %v\n", mySlice)
		fmt.Printf("mySliceCopy: %v\n", mySliceCopy)
	}
}

func myFunctionArray(arr [3]string) {
	// Change Oranges to berries
	arr[1] = "berries"
	fmt.Printf("Array Values in myFunction(): %v\n", arr)
}

func myFunction(fruits []string) {
	// change oranges to strawberries
	fruits[1] = "Strawberries"
	fmt.Printf("Slice values in myFunction() %v\n", fruits)
}
