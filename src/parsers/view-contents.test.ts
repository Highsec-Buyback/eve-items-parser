import {describe, expect, it} from 'vitest';
import {ViewContents} from './view-contents';
import {StringToInput} from './input';
import {viewContentsTestCases} from "./view-contents.test-cases";

describe('ViewContents', () => {
    it.each(viewContentsTestCases)("$description", ({input, expected, expectedRest}) => {
        const [parsed, rest] = new ViewContents().parse(StringToInput(input));
        expect(parsed.items).toMatchObject(expected.items);
        expect(rest).toMatchObject(expectedRest);
    });
});
