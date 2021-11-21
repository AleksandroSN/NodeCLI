# RSSchool NodeJS. Task 2: NodeJS Test
### Description task : https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/testing.md
## To work with the command line you must :
1. Have NodeJS version 15+
2. git clone
3. git checkout dev
4. npm i
5. use only txt files
## Available commands 

```bash
Options:
  -i, --input  path    an input file or use stdin as an input source
  -o, --output path    an output file or use stdout as an output destination
  -c, --config         config must have pattern {XY-}n and used only uppercase, where:
    - X is a cipher mark:
      -- C is for Caesar cipher (with shift 1)
      -- A is for Atbash cipher
      -- R is for ROT-8 cipher
    - Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
      -- 1 is for encoding
      -- 0 is for decoding
```
## Usage example:

```bash
node cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

## Tests:
For tests use next commands:

1. View test coverage percentage 
```bash
npm run coverage
```

2. Test individual file
```bash
npm run test cli.test.js
```
