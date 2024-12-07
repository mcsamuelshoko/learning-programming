package main

import (
	"log"
	"net/http"
	"url-shortener/internal/controllers"
)

func main() {
	http.HandleFunc("/", controllers.ShowIndex)
	http.HandleFunc("/shorten", controllers.Shorten)
	log.Fatalln(http.ListenAndServe(":8080", nil))
}
