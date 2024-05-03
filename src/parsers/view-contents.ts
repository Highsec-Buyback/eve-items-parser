import {Item, Parser} from "./parser-interface";
import { regexParseLines, CleanTypeName } from "./utils";
import { Input } from "./input";
import { parseNumber } from "./number-parsing";

export class ViewContents implements Parser {
    items: ViewContentsItem[] = [];

    name(): string {
        return "view_contents";
    }

    parse(input: Input): [ViewContents, Input] {
        const reViewContents = /^([\S ]*)\t([\S ]*)\t((?:Cargo|Ore|Planetary Commodities) Hold|(?:Drone|Fuel|Fighter) Bay|(?:Low|Medium|High|Rig) Slot|Subsystem|Fighter Launch Tube|)\t([\d,'.]+)$/;
        const reViewContents2 = /^([\S ]*)\t([\S ]*)\t([\d,'.]+)$/;

        const [matches, rest1] = regexParseLines(reViewContents, input);
        const [matches2, rest2] = regexParseLines(reViewContents2, rest1);

        const itemsMap: Record<string, ViewContentsItem> = {};

        Object.values(matches).forEach(match => {
            const key = `${match[1]}-${match[3]}`;
            const item = itemsMap[key] || {
                name: CleanTypeName(match[1]),
                group: match[2],
                location: match[3],
                quantity: 0
            };
            item.quantity += Math.floor(parseNumber(match[4].replace(/[,']/g, '')));
            itemsMap[key] = item;
        });

        Object.values(matches2).forEach(match => {
            const key = `${match[1]}-${match[2]}`;
            const item = itemsMap[key] || {
                name: CleanTypeName(match[1]),
                group: match[2],
                location: "",
                quantity: 0
            };
            item.quantity += Math.floor(parseNumber(match[3].replace(/[,']/g, '')));
            itemsMap[key] = item;
        });

        this.items = Object.values(itemsMap);
        this.items.sort((a, b) => a.name.localeCompare(b.name));

        return [this, rest2];
    }
}

interface ViewContentsItem extends Item {
    name: string;
    group: string;
    location: string;
    quantity: number;
}
