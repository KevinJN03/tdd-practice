const {caesarCipher} = require("../Function/caesarCipher")

test("abc should return bcd", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd")
})

test("!abc!! should return bcd", () => {
    expect(caesarCipher("!abc!!", 2)).toBe("!cde!!")
})

test("zabc should return bcd", () => {
    expect(caesarCipher("zabc", 2)).toBe("bcde")
})

test("kevioiodsuj should return rlcpvpvkzbq", () => {
    expect(caesarCipher("kevioiodsuj", 7)).toBe("rlcpvpvkzbq")
})

test("kndlchbflhdbslhc5864!sfsdf should return rlcpvpvkzbq", () => {
    expect(caesarCipher("kndlchbflhdbslhc5864!sfsdf", 7)).toBe("ruksjoimsokizsoj5864!zmzkm")
})

test("DNLKNDLKDNASDNKDHNK should return KUSRUKSRKUHZKURKOUR", () => {
    expect(caesarCipher("DNLKNDLKDNASDNKDHNK", 7)).toBe("KUSRUKSRKUHZKURKOUR")
})

test(`fjhfbhjbDGHGJHJKGFGBHNJ!%^1278y2fggDD should return mqomioqiKNONQOQRNMNIOUQ!%^1278f2mnnKK`, () => {
    expect(caesarCipher(`fjhfbhjbDGHGJHJKGFGBHNJ!%^1278y2fggDD`, 7)).toBe(`mqomioqiKNONQOQRNMNIOUQ!%^1278f2mnnKK`)
})

test(`DNLKNDLKDhddhdhudYUrRDIUV[ieojfunu4rdnlcinlsjNXJNdsl^%$&%^&hjkrhcfvgb£$%^&* should return KUSRUKSRKokkokobkFByYKPBC[plvqmbub4ykusjpuszqUEQUkzs^%$&%^&oqryojmcni£$%^&*`, () => {
    expect(caesarCipher(`DNLKNDLKDhddhdhudYUrRDIUV[ieojfunu4rdnlcinlsjNXJNdsl^%$&%^&hjkrhcfvgb£$%^&*`, 7)).toBe(`KUSRUKSRKokkokobkFByYKPBC[plvqmbub4ykusjpuszqUEQUkzs^%$&%^&oqryojmcni£$%^&*`)
})


test("uu should return bb", () => {
    expect(caesarCipher("DNLKNDLKDhddhdhudYUr", 7)).toBe("KUSRUKSRKokkokobkFBy")
})