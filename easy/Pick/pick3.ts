export {};

// 3. Extract
type MyPick<T, K> = { [P in Extract<keyof T, K>]: T[P] }

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}