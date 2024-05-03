import { describe, it, expect } from 'vitest';
import { Assets } from './assets';
import {StringToInput} from "./input";
import {assetsTestCases} from "./assets.test-cases";

describe('Assets', () => {
    it.each(assetsTestCases)("$description", ({input, expected, expectedRest}) => {
        const [parsed, rest] = new Assets().parse(StringToInput(input));
        expect(parsed.items).toMatchObject(expected.items);
        expect(rest).toMatchObject(expectedRest);
    });
});
