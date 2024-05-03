import {Item, Parser} from "./parser-interface";
import {regexParseLines} from "./utils";
import {Input} from "./input";

export class PI implements Parser {
    items: PIItem[] = [];

    name(): string {
        return "pi";
    }

    parse(input: Input): [PI, Input] {
        const rePI1 = /^([\d,'.]+)\t([\S ]+)\t((Routed|Not routed))$/;
        const rePI2 = /^\t([\S ]+)\t([\d,'.]+)\t([\d,'.]+)(?: m3)?$/;
        const rePI3 = /^\t([\S ]+)\t([\d,'.]+)$/;

        const [matches1, rest1] = regexParseLines(rePI1, input);
        const [matches2, rest2] = regexParseLines(rePI2, rest1);
        const [matches3, rest3] = regexParseLines(rePI3, rest2);

        type Key = `${string}-${boolean}`;
        const matchgroup: Record<Key, PIItem> = {};
        Object.values(matches1).forEach(match => {
            const name = match[2];
            const routed = match[3] === "Routed";
            const quantity = parseInt(match[1].replace(/[,']/g, ''), 10);
            const key = `${name}-${routed}`;
            if (matchgroup[key]) {
                matchgroup[key].quantity += quantity;
            } else {
                matchgroup[key] = {name, quantity, volume: 0, routed};
            }
        });

        Object.values(matches2).forEach(match => {
            const name = match[1];
            const quantity = parseInt(match[2].replace(/[,']/g, ''), 10);
            const volume = parseFloat(match[3].replace(/[,']/g, ''));
            const key = `${name}-${false}`;
            if (matchgroup[key]) {
                matchgroup[key].quantity += quantity;
                matchgroup[key].volume = volume;
            } else {
                matchgroup[key] = {name, quantity, volume, routed: false};
            }
        });

        Object.values(matches3).forEach(match => {
            const name = match[1];
            const quantity = parseInt(match[2].replace(/[,']/g, ''), 10);
            const key = `${name}-${false}`;
            if (matchgroup[key]) {
                matchgroup[key].quantity += quantity;
            } else {
                matchgroup[key] = {name, quantity, volume: 0, routed: false};
            }
        });

        this.items = Object.values(matchgroup);
        this.items.sort((a, b) => a.name.localeCompare(b.name));

        return [this, rest3];
    }
}

class PIItem implements Item {
    name: string = "";
    quantity: number = 0;
    volume: number = 0;
    routed: boolean = false;
}
