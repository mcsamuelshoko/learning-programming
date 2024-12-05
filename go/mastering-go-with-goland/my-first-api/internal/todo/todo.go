package todo

import (
	"errors"
)

type item struct {
	Task  string
	State string
}

type Service struct {
	todos []item
}

func NewService() *Service {
	return &Service{todos: make([]item, 0)}
}

func (svc *Service) Add(todo string) error {
	// checking if todos already exists
	for _, t := range svc.todos {
		if t.Task == todo {
			return errors.New("todo already exists")
		}
	}
	todoItem := new(item)
	todoItem.Task = todo
	todoItem.State = "unfinished"
	//adding new to todos
	svc.todos = append(svc.todos, *todoItem)
	return nil
}

func (svc *Service) GetAll() []item {
	return svc.todos
}
