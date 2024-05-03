import {Item, Parser} from "./parser-interface";
import {parseNumber} from "./number-parsing";
import {CleanTypeName, regexParseLines} from "./utils";
import {Input} from "./input";

export class Listing implements Parser {
    items: ListingItem[] = [];

    name(): string {
        return "listing";
    }

    parse(input: Input): [Listing, Input] {
        const reListing = /^\s*([\d,'\.]+?) ?(?:x|X)? ([\S ]+)[\s]*$/;
        const reListing2 = /^([\S ]+?):? (?:x|X)? ?([\d,'\.]+)[\s]*$/;
        const reListing3 = /^\s*([\S ]+)[\s]*$/;
        const reListing4 = /^\s*([\d,'\.]+)\t([\S ]+?)[\s]*$/;
        const reListingWithAmmo = /^([\S ]+), ?([a-zA-Z][\S ]+)[\s]*$/;

        let [matches, rest2] = regexParseLines(reListing, input);
        let [matches2, rest3] = regexParseLines(reListing2, rest2);
        let [matches3, rest4] = regexParseLines(reListing3, rest3);
        let [matches4, rest5] = regexParseLines(reListing4, rest4);
        let [matchesWithAmmo, restFinal] = regexParseLines(reListingWithAmmo, rest5);

        if (!matches && !matches2 && !matches3 && !matches4 && !matchesWithAmmo) {
            return [new Listing(), input];
        }

        const listing = new Listing();

        const matchgroup: { [key: string]: number } = {};
        for (const match of Object.values(matches) ?? []) {
            let name = CleanTypeName(match[2]);
            if (!matchgroup[name]) {
                matchgroup[name] = 0
            }
            matchgroup[name] += Math.floor(parseNumber(match[1]))
        }
        for (const match of Object.values(matches2) ?? []) {
            let name = CleanTypeName(match[1]);
            if (!matchgroup[name]) {
                matchgroup[name] = 0
            }
            matchgroup[name] += Math.floor(parseNumber(match[2]))
        }
        for (const match of Object.values(matches3) ?? []) {
            let name = CleanTypeName(match[1]);
            if (!matchgroup[name]) {
                matchgroup[name] = 0
            }
            matchgroup[name] += 1
        }
        for (const match of Object.values(matches4) ?? []) {
            if (!matchgroup[CleanTypeName(match[2])]) {
                matchgroup[CleanTypeName(match[2])] = 0
            }
            matchgroup[CleanTypeName(match[2])] += Math.floor(parseNumber(match[1]))
        }
        for (const match of Object.values(matchesWithAmmo) ?? []) {
            if (!matchgroup[CleanTypeName(match[1])]) {
                matchgroup[CleanTypeName(match[1])] = 0
            }
            if (!matchgroup[CleanTypeName(match[2])]) {
                matchgroup[CleanTypeName(match[2])] = 0
            }
            matchgroup[CleanTypeName(match[1])] += 1
            matchgroup[CleanTypeName(match[2])] += 1
        }

        for (const [name, quantity] of Object.entries(matchgroup)) {
            listing.items.push({ name: name, quantity: quantity });
        }

        listing.items.sort((a, b) => a.name.localeCompare(b.name));

        return [listing, restFinal];
    }
}

export class ListingItem implements Item {
    name: string = "";
    quantity: number = 0;
}
