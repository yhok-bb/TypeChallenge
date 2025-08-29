export {};
type Unshift<T extends readonly unknown[], K> = [K, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2]