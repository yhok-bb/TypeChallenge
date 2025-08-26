export {};

type If<C extends boolean, T, F> = { true: T, false: F }[C extends true ? "true" : "false"]

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
