import {describe, expect, it} from "vitest";
import {StringToInput} from "./input";
import {PI} from "./pi";
import {piTestCases} from "./pi.test-cases";

describe("PI", () => {
    it.each(piTestCases)("$description", ({input, expected, expectedRest}) => {
        const [parsed, rest] = new PI().parse(StringToInput(input));
        expect(parsed.items).toMatchObject(expected.items);
        expect(rest).toMatchObject(expectedRest);
    });
})