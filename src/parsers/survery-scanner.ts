import {Item, Parser} from "./parser-interface";
import {regexParseLines, CleanTypeName} from "./utils";
import {Input} from "./input";
import {parseNumber} from "./number-parsing";

export class SurveyScan implements Parser {
    items: ScanItem[] = [];

    name(): string {
        return "loot_history";
    }

    parse(input: Input): [SurveyScan, Input] {
        const reSurveyScanner = /^([\S ]+)\t([\d,'.]+)\t([\d,'.]* (m|km))$/;
        const [matches, rest] = regexParseLines(reSurveyScanner, Object.values(input));

        Object.values(matches).forEach(match => {
            this.items.push({
                name: CleanTypeName(match[1]),
                quantity: Math.floor(parseNumber(match[2].replace(/[,']/g, ''))),
                distance: match[3]
            });
        });

        this.items.sort((a, b) => a.name.localeCompare(b.name));

        if (Object.values(matches).length > 0) {
            return [this, []];
        }
        return [this, rest];
    }
}

class ScanItem implements Item {
    name: string = "";
    quantity: number = 0;
    distance: string = "";
}
