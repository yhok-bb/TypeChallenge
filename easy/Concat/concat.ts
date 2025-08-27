type Unknown = readonly unknown[]

type Concat<T extends Unknown, K extends Unknown> = [...T, ...K];
type Result = Concat<[1], [2]> // expected to be [1, 2]