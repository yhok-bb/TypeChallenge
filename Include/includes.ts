type Includes<T extends readonly unknown[], K> =
  T extends [infer First, ...infer Last]
  ? First extends K
    ? true
    : Includes<Last, K>
  : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`