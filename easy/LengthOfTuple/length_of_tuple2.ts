export {};

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// recursion count type
type Length<T extends readonly any[], Counter extends readonly any[] = []> =
  T extends readonly [any, ...infer Rest]
    ? Length<Rest, [...Counter, any]>
    : Counter['length']                         

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5s