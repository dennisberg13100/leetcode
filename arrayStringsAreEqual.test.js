const arrayStringsAreEqual = require('./arrayStringsAreEqual')

console.log(typeof(arrayStringsAreEqual))

test('arrayStringsAreEqual(["ab", "c"], ["a", "bc"]) = true', () => {
    expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toBeTruthy()
})

test('arrayStringsAreEqual(["a", "cb"], ["ab", "c"]) = true', () => {
    expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toBeFalsy()
})

test('arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]) = true', () => {
    expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])).toBeTruthy()
})
