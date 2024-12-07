package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", ShowHomePage)
	log.Fatalln(http.ListenAndServe(":8080", nil))
}

func ShowHomePage(w http.ResponseWriter, _ *http.Request) {
	tmpl, err := template.ParseFiles("internal/views/index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}