type Last<T extends unknown[]> =
  T extends [] ? never : T extends [...any[], infer L] ? L : never; // 空配列を先に弾くパターン

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1