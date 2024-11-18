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
		fmt.Printf("Final array values: %v", myArray)
	}

	// Slices
	{

	}

}

func myFunctionArray(arr [3]string) {
	// Change Oranges to berries
	arr[1] = "berries"
	fmt.Printf("Array Values in myFunction(): %v\n", arr)
}
