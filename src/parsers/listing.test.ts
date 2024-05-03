import { describe, it, expect } from 'vitest';
import { Listing } from './listing';
import {StringToInput} from "./input";
import {listingTestCases} from "./listing.test-cases";

describe('ListingParser', () => {
    it.each(listingTestCases)("$description", ({input, expected, expectedRest}) => {
        const [parsed, rest] = new Listing().parse(StringToInput(input));
        expect(parsed.items).toMatchObject(expected.items);
        expect(rest).toMatchObject(expectedRest);
    });
});
