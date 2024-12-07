package controllers

import (
	"html/template"
	"log"
	"net/http"
	"strings"
)

func Shorten(w http.ResponseWriter, r *http.Request) {
	log.Println("calling shorten on: ", r.FormValue("url"))
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	originalURL := r.FormValue("url")
	if originalURL == "" {
		http.Error(w, "URL not provided", http.StatusBadRequest)
		return
	}

	if !strings.HasPrefix(originalURL, "http://") && !strings.HasPrefix(originalURL, "https://") {
		log.Println("prefixing the URL")
		originalURL = "https://" + originalURL
	}

	// Shorten the URL
	data := map[string]string{
		"ShortURL": originalURL,
	}
	log.Println("shortened the URL")

	t, err := template.ParseFiles("internal/views/shorten.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	log.Println("executing template on: ", data["ShortURL"])
	if err := t.Execute(w, data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	return
}
