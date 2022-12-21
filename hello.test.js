import { test, expect } from 'vitest'


const add = (...params) => {
    return params.reduce((x, y) => x + y, 0)
}

test('1 + 1', () => {
    expect(add(1,1)).toEqual(2)
})

test('1加到5',()=>{
    expect(add(1,2,3,4,5)).toEqual(15)
})

test('1個數字',()=>{
    expect(add(1)).toEqual(1)
})

test('沒數字',()=>{
    expect(add()).toEqual(0)
})

