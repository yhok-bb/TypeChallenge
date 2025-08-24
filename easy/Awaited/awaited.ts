type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string