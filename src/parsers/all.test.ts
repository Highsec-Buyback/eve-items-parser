import {describe, expect, it} from 'vitest';
import {assetsTestCases} from "./assets.test-cases";
import {StringToInput} from "./input";
import {AllParser} from "./all";
import {listingTestCases} from "./listing.test-cases";
import {contractTestCases} from "./contract.test-cases";
import {piTestCases} from "./pi.test-cases";
import {surveyScanTestCases} from "./survey-scanner.test-cases";
import {viewContentsTestCases} from "./view-contents.test-cases";

describe("All", () => {

    describe("Assets", () => {
        const cases = assetsTestCases.filter(c => c.runForAll);
        it.each(cases)("$description", ({input, expected, expectedRest}) => {
            const [parsed, rest] = new AllParser().parse(StringToInput(input));
            expect(parsed.items).toMatchObject(expected.items);
            expect(rest).toMatchObject(expectedRest);
        });
    });

    describe("Listing", () => {
        const cases = listingTestCases.filter(c => c.runForAll);
        it.each(cases)("$description", ({input, expected, expectedRest}) => {
            const [parsed, rest] = new AllParser().parse(StringToInput(input));
            expect(parsed.items).toMatchObject(expected.items);
            expect(rest).toMatchObject(expectedRest);
        });
    });

    describe("Contract", () => {
        const cases = contractTestCases.filter(c => c.runForAll);
        it.each(cases)("$description", ({input, expected, expectedRest}) => {
            const [parsed, rest] = new AllParser().parse(StringToInput(input));
            expect(parsed.items).toMatchObject(expected.items);
            expect(rest).toMatchObject(expectedRest);
        });
    });

    describe("PI", () => {
        const cases = piTestCases.filter(c => c.runForAll);
        it.each(cases)("$description", ({input, expected, expectedRest}) => {
            const [parsed, rest] = new AllParser().parse(StringToInput(input));
            expect(parsed.items).toMatchObject(expected.items);
            expect(rest).toMatchObject(expectedRest);
        });
    });

    describe("SurveyScanner", () => {
        const cases = surveyScanTestCases.filter(c => c.runForAll);
        it.each(cases)("$description", ({input, expected, expectedRest}) => {
            const [parsed, rest] = new AllParser().parse(StringToInput(input));
            expect(parsed.items).toMatchObject(expected.items);
            expect(rest).toMatchObject(expectedRest);
        });
    });

    describe("ViewContents", () => {
        const cases = viewContentsTestCases.filter(c => c.runForAll);
        it.each(cases)("$description", ({input, expected, expectedRest}) => {
            const [parsed, rest] = new AllParser().parse(StringToInput(input));
            expect(parsed.items).toMatchObject(expected.items);
            expect(rest).toMatchObject(expectedRest);
        });
    });
})

