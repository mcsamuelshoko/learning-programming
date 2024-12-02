package main

import (
	"encoding/json"
	"log"
	"net/http"
)

var todos = make([]string, 0)

type TodoItem struct {
	Item string `json:"item"`
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Println("[route] GET:/")
		_, err := w.Write([]byte("Hello Todo World!"))
		if err != nil {
			log.Fatal(err)
		}
	})

	mux.HandleFunc("GET /todo", func(w http.ResponseWriter, r *http.Request) {
		log.Println("[route] GET:/todo")

		err := json.NewEncoder(w).Encode(todos)
		if err != nil {
			log.Fatal(err)
		}
	})

	mux.HandleFunc("POST /todo", func(writer http.ResponseWriter, r *http.Request) {
		log.Println("[route] POST:/todo")
		var t TodoItem
		err := json.NewDecoder(r.Body).Decode(&t)
		if err != nil {
			log.Println(err)
			writer.WriteHeader(http.StatusBadRequest)
			return
		}
		todos = append(todos, t.Item)
		writer.WriteHeader(http.StatusCreated)
		return

	})

	log.Println("starting server on: 8080")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		log.Fatal(err)
	}

}
