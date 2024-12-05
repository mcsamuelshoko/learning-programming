package transport

import (
	"encoding/json"
	"log"
	"my-first-api/internal/todo"
	"net/http"
)

type TodoItem struct {
	Item string `json:"item"`
}

type Server struct {
	mux *http.ServeMux
}

func NewServer(todoSvc *todo.Service) *Server {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		log.Println("[route] GET:/")
		_, err := w.Write([]byte("Hello Todo World!"))
		if err != nil {
			log.Fatal(err)
		}
	})

	mux.HandleFunc("GET /todo", func(w http.ResponseWriter, r *http.Request) {
		log.Println("[route] GET:/todo")

		b, err := json.Marshal(todoSvc.GetAll())
		if err != nil {
			log.Fatal(err)
		}
		_, err = w.Write(b)
		if err != nil {
			log.Fatal(err)
		}
		return
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

		//adding todos
		err = todoSvc.Add(t.Item)
		if err != nil {
			writer.WriteHeader(http.StatusBadRequest)
			return
		}
		writer.WriteHeader(http.StatusCreated)
		return

	})
	return &Server{mux: mux}
}

func (s *Server) Serve() error {
	log.Println("starting server on: 8080")
	return http.ListenAndServe(":8080", s.mux)

}
