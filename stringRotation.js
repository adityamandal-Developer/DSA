// Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.

const stringRotation = (a, b) => {
    return a.length === b.length && (a + a).includes(b)
}

console.log(stringRotation("ABCD", "BCDA"))