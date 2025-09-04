type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K]
}

type X = {
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`

const t: Todo = {
  x: {
    a: 1,
    b: "hi"
  },
  y: "hey"
}

// t["x"]["a"] = 1 // Cannot assign to 'a' because it is a read-only property.