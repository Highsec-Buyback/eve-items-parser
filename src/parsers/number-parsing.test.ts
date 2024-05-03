import {describe, it, expect} from "vitest";
import {parseNumber} from "./number-parsing";

describe("brightspace number parsing", () => {
    it("should parse US numbers", () => {
        const actual = parseNumber("123,456.78")
        expect(actual).toBe(123456.78)
    })

    it("should parse German numbers", () => {
        const actual = parseNumber("123.456,78")
        expect(actual).toBe(123456.78)
    })

    it("should parse uptick variant", () => {
        const actual = parseNumber("1'080")
        expect(actual).toBe(1080);
    })

    it("should parse accent uptick variant", () => {
        const actual = parseNumber("1’080")
        expect(actual).toBe(1080);
    })

    it("should parse ambiguous numbers assuming US format", () => {
        const actual = parseNumber("123,456")
        expect(actual).toBe(123456)
    })

    it("should handle spaces", () => {
        const actual = parseNumber("76 705 081,83")
        expect(actual).toBe(76705081.83)
    })

    it("should handle narrow spaces", () => {
        const actual = parseNumber("37 805 997.92")
        expect(actual).toBe(37805997.92)
    })
})