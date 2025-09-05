type TupleToUnion<T> = T extends [infer F, ...infer R] ? F | TupleToUnion<R> : never

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'