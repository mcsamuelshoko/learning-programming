package todo

import (
	"context"
	"errors"
	"fmt"
	"my-first-api/internal/db"
	"strings"
)

type Item struct {
	Task  string
	State string
}

type Service struct {
	db *db.DB
}

func NewService(db *db.DB) *Service {
	return &Service{
		db: db,
	}
}

func (svc *Service) Add(todo string) error {
	items, err := svc.GetAll()
	if err != nil {
		return fmt.Errorf("failed to read from db: %w", err)
	}
	// checking if todos already exists
	for _, t := range items {
		if t.Task == todo {
			return errors.New("todo already exists")
		}
	}

	if err := svc.db.InsertItem(context.Background(), db.Item{
		Task:   todo,
		Status: "UNFINISHED",
	}); err != nil {
		return fmt.Errorf("failed to insert item: %w", err)
	}
	return nil
}

//func (svc *Service) AddItem(todoItem Item) error {
//	// checking if todos already exists
//	for _, t := range svc.todos {
//		if t.Task == todoItem.Task {
//			return errors.New("to-do already exists")
//		}
//	}
//	//adding new to todos
//	svc.todos = append(svc.todos, todoItem)
//	return nil
//}

func (svc *Service) Search(query string) ([]string, error) {
	items, err := svc.GetAll()
	if err != nil {
		return nil, fmt.Errorf("failed to read from db: %w", err)
	}
	var results []string
	for _, t := range items {
		if strings.Contains(strings.ToLower(t.Task), strings.ToLower(query)) {
			results = append(results, t.Task)
		}
	}
	return results, nil
}

func (svc *Service) GetAll() ([]Item, error) {
	var results []Item
	items, err := svc.db.GetAllItems(context.Background())
	if err != nil {
		return nil, fmt.Errorf("failed to read from db: %w", err)
	}
	for _, item := range items {
		results = append(results, Item{
			Task:  item.Task,
			State: item.Status,
		})

	}
	return results, nil
}
