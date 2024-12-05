package todo

import (
	"errors"
)

type Service struct {
	todos []string
}

func NewService() *Service {
	return &Service{todos: make([]string, 0)}
}

func (svc *Service) Add(todo string) error {
	// checking if todos already exists
	for _, t := range svc.todos {
		if t == todo {
			return errors.New("todo already exists")
		}
	}
	//adding new to todos
	svc.todos = append(svc.todos, todo)
	return nil
}

func (svc *Service) GetAll() []string {
	return svc.todos
}
