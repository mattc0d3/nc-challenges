const checkUsernames = require('../katas/check-usernames')

describe("checkUsernames", () => {
    test("returns false if passed empty array", () => {
        expect(checkUsernames([])).toBe(false)
    })
    test("returns false when passed array containing empty string", () => {
        expect(checkUsernames([""])).toBe(false)
    })
    test("returns false when username is too short or two long", () => {
        expect(checkUsernames(["abc"])).toBe(false)
        expect(checkUsernames(["abcdefghijklmnopqrstuvwxyz"])).toBe(false)
    })
    test("returns false when username contains uppercase letters", () => {
        expect(checkUsernames(["userName"])).toBe(false)
    })
    test("returns false when username contains special characters", () => {
        expect(checkUsernames(["usern@me"])).toBe(false)
        expect(checkUsernames(["username%"])).toBe(false)
        expect(checkUsernames(["user!name"])).toBe(false)
    })
    test("returns true when username meets criteria", () => {
        expect(checkUsernames(["username123"])).toBe(true)
        expect(checkUsernames(["another_name"])).toBe(true)
    })
    test("returns false if any usernames in array do not match criteria", () => {
        expect(checkUsernames(["username123", "b@dnAme", "another_name"])).toBe(false)
    })
})