package todo_test

import (
	"my-first-api/internal/todo"
	"reflect"
	"testing"
)

func TestService_Search(t *testing.T) {

	tests := []struct {
		name            string
		todosToAdd      []string
		query           string
		expectendResult []string
	}{
		// test cases.
		{
			name:            "Given a todo of shop, and a search of i should get shop back",
			todosToAdd:      []string{"shop"},
			query:           "sh",
			expectendResult: []string{"shop"},
		},
		{
			name:            "Still returns shopping even if casing is different",
			todosToAdd:      []string{"Shopping"},
			query:           "shop",
			expectendResult: []string{"Shopping"},
		},
		{
			name:            "spaces",
			todosToAdd:      []string{"go Shopping"},
			query:           "go",
			expectendResult: []string{"go Shopping"},
		},
		{
			name:            "whitespace at the beginning of the word",
			todosToAdd:      []string{" how about da.."},
			query:           "HoW",
			expectendResult: []string{" how about da.."},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			svc := todo.NewService()
			for _, toAdd := range tt.todosToAdd {
				err := svc.Add(toAdd)
				if err != nil {
					t.Error(err)
				}
			}
			if got := svc.Search(tt.query); !reflect.DeepEqual(got, tt.expectendResult) {
				t.Errorf("Search() = %v, want %v", got, tt.expectendResult)
			}
		})
	}
}
