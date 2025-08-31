type MyParameters<T> = T extends (...args: infer P) => any
  ? P
  : never;

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]