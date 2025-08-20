export {};

type TupleToObject<T extends readonly any[]> = { [K in T[number]]: K};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// Optional Ver
// type TupleToObject<T extends readonly any[]> = { [K in T[number]]?: K};
// const arr = ['tesla', 'model 3'] as const;
// const A: TupleToObject<typeof arr> = {
//   'model 3': 'model 3',
// }