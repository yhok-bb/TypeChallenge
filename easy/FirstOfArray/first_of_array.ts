export {};

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

//  First<T> = T[0] だとTが文字列の可能性がある
type First<T extends readonly any[]> = T[0]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3