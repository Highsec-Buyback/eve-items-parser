import {Assets} from "./assets";
import {SurveyScan} from "./survery-scanner";
import {Listing} from "./listing";
import {PI} from "./pi";
import {ViewContents} from "./view-contents";
import {Contract} from "./contract";
import {Item, Parser} from "./parser-interface";
import {Input} from "./input";

const allParsers: Parser[] = [
    new PI(),
    new ViewContents(),
    new SurveyScan(),
    new Contract(),
    new Listing(),
    new Assets(),
];

export class AllParser implements Parser {

    constructor(private parsers: Parser[] = allParsers) {
    }

    items: Item[] = [];

    parse(input: Input): [AllParser, Input] {
        let left = input;

        for (const parser of this.parsers) {
            if (!left || left.length == 0) break; // if there is no input left, break the loop
            let result;
            [result, left] = parser.parse(left);

            if (result?.items.length) {
                this.items.push(...result.items.filter(i => i.name));
            }
        }

        return [this, left];
    }
}