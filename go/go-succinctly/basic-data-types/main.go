package main

import (
	"fmt"
	"reflect"
)

func main() {
	startingOps("INT")
	numericTypesINT()

	startingOps("FLOAT")
	numericTypesFLOAT()

	fp1 := 35.0
	fp2 := 65.0

	result := fp1 / fp2
	fmt.Printf("%f / %f = %f\n", fp1, fp2, result)

	// Type of Float
	fmt.Printf("fp1 is type: %s\n", reflect.TypeOf(fp1))
	fmt.Printf("fp2 is type: %s\n", reflect.TypeOf(fp2))
	fmt.Printf("result is type: %s\n", reflect.TypeOf(result))

	// casting to FLOAT types
	var fpNum float32
	fpNum = 3.14

	// or
	fpN1 := float32(3.14)
	fmt.Printf("fpNum = %f, fpN1 = %f\n", fpNum, fpN1)

	// casting from one type to another
	i := 373
	f := float64(i)
	u := uint(f)

	fmt.Printf("i = %d, f = %f, u = %d\n", i, f, u)

	startingOps("BOOLEAN")
	booleanType()
	startingOps("STRING")
	stringTypes()
}

func startingOps(s string) {
	fmt.Println("\n[*]   STARTING ", s, " OPS [*]")
	fmt.Println("==============================")
}
func numericTypesINT() {
	// integers
	var lucky uint32 = 7
	var bigBoom int64 = 9078975979837498759

	fmt.Printf("le 'INT' numbers => lucky: %d, bigBoom: %d \n", lucky, bigBoom)
}
func numericTypesFLOAT() {
	var smolFloat float32 = 753163.345337345
	var bigFloat float64 = 3453409043.347949898437969898479874997399865983
	fmt.Printf("real-numbers|le 'FLOAT' nombres => smol: %f , biig: %f\n", smolFloat, bigFloat)
}
func booleanType() {
	var trueValue bool
	trueValue = true
	falseValue := false

	fmt.Println("1. trueValue && trueValue = ", trueValue && trueValue)
	fmt.Println("2. trueValue && falseValue = ", trueValue && falseValue)
	fmt.Println("3. trueValue || trueValue = ", trueValue || trueValue)
	fmt.Println("4. trueValue || falseValue = ", trueValue || falseValue)
	fmt.Println("5. !trueValue = ", !trueValue)
}
func stringTypes() {
	str1 := "There is a tab between this\tand this"
	str2 := `There is a tab between this\tand this`

	fmt.Println(str1)
	fmt.Println(str2)

	// common strings operations
	{
		str1 := "This is a string "
		str2 := " which is now much longer"
		fmt.Println(str1 + str2)

		// length
		str := "This is a string"
		fmt.Println(len(str))

		// Substrings
		{
			str := "The elephants of spring are tickling my frying spoon"
			fmt.Println(str[0:4])
			fmt.Println(str[17:23])
			fmt.Println(str[:13])
			fmt.Println(str[31:])
		}
	}

}
