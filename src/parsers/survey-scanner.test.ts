import {describe, it, expect} from "vitest";
import {parseNumber} from "./number-parsing";
import {StringToInput} from "./input";
import {SurveyScan} from "./survery-scanner";
import {piTestCases} from "./pi.test-cases";
import {PI} from "./pi";
import {surveyScanTestCases} from "./survey-scanner.test-cases";

describe("SurveyScanner", () => {
    it.each(surveyScanTestCases)("$description", ({input, expected, expectedRest}) => {
        const [parsed, rest] = new SurveyScan().parse(StringToInput(input));
        expect(parsed.items).toMatchObject(expected.items);
        expect(rest).toMatchObject(expectedRest);
    });
})