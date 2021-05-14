# Demo Vector implementation

## Implementation notes
- Vector implementation is a generic, but since vector should be mathematical, is supports only types derived from `number` type.
- There are implemented both `dotProduct` and `crossProduct` operations for Vector, along with required dependent operations:
    - push elements to the end of the vector
    - get vector element by index
    - get vector length
- Both dot product and cross product operations are covered by unit tests with `mocha` framework and `nyc` as a code coverage tool

## How to run
To run unit tests with coverage:
```bash
npm install
npm run test
```

Or you can use a shorthand for that:
```bash
./run.sh
```

As a result, it should be displayed 3/3 passed unit-tests and 100% code coverage.

## Author

Aleksei Marashov, backend developer. 

Email: `marashov-aleksey@yandex.ru`.
