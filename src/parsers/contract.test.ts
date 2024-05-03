import { describe, it, expect } from 'vitest';
import {StringToInput} from "./input";
import {Contract} from "./contract";
import {contractTestCases} from "./contract.test-cases";

describe('ContractParser', () => {
    it.each(contractTestCases)("$description", ({input, expected, expectedRest}) => {
        const [parsed, rest] = new Contract().parse(StringToInput(input));
        expect(parsed.items).toMatchObject(expected.items);
        expect(rest).toMatchObject(expectedRest);
    });
});
