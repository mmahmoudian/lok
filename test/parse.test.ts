

import * as path from 'path'
import parse from '../src/parse'
import config from '../src/config'

test('psrse -> JavaScript', () => {

    const filePath = path.resolve(__dirname, './__code/main.js')
    const JavaScript = parse(filePath, config['.js'][1])

    expect(JavaScript.lines).toBe(12)
    expect(JavaScript.blank).toBe(4)
    expect(JavaScript.comment).toBe(1)
    expect(JavaScript.code).toBe(0)

})

test('psrse -> TypeScript', () => {

    const filePath = path.resolve(__dirname, './__code/main.ts')
    const TypeScript = parse(filePath, config['.ts'][1])

    expect(TypeScript.lines).toBe(12)
    expect(TypeScript.blank).toBe(4)
    expect(TypeScript.comment).toBe(1)
    expect(TypeScript.code).toBe(0)

})


// ...

