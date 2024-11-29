package main

import (
	"fmt"
	"hash/crc32"
	"io"
	"os"
)

func hash(filename string) (uint32, error) {
	// open the file
	f, err := os.Open(filename)
	if err != nil {
		return 0, err
	}

	// always close files you have opened
	defer f.Close()

	// create the hashing algorithm
	h := crc32.NewIEEE()

	// copy the file into the hasher
	/*
		- copy() parameters are destination, source.
		It returns the number of bytes written, error

		the number of ty
	*/

	_, err = io.Copy(h, f)
	// did this work?

	if err != nil {
		// no - return zero and the error details
		return 0, err
	}

	// yes, return the checksum and a nil error
	return h.Sum32(), nil

}

func main() {
	println("starting!")

	// contents of file1.txt: "ty Lord"
	h1, err := hash("file1.txt")
	if err != nil {
		println("error: file1")
		return
	}
	// contents of file2.txt: "ty Lord again"
	h2, err := hash("file2.txt")
	if err != nil {
		return
	}

	if h1 == h2 {
		fmt.Println(h1, h2, "Checksums match - files are identical")
	} else {
		fmt.Println(h1, h2, "Checksums don't match - files are different")
	}
	println("finished :)")
}
