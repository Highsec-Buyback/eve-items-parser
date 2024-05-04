import {bigNumberRegex, CleanTypeName, regexParseLines} from "./utils";
import {parseNumber} from "./number-parsing";
import {Item, Parser} from "./parser-interface";
import {Input} from "./input";

export interface AssetItem extends Item {
    name: string;
    quantity: number;
    volume: number;
    group?: string;
    category?: string;
    size?: 'XLarge' | 'Large' | 'Medium' | 'Small';
    slot?: 'High' | 'Medium' | 'Low' | 'Rigs' | string;
    metaLevel?: string;
    techLevel?: string;
    priceEstimate?: number;
};

export class Assets implements Parser {
    items: AssetItem[] = [];

    public name(): string {
        return "assets";
    }

    public parse(input: Input): [Assets, Input] {
        const assetList = new Assets();
        const [matches, rest] = regexParseLines(reAssetList, input);

        for (const match of Object.values(matches)) {
            const quantity = parseNumber(match[2]) || 1;
            assetList.items.push({
                name: CleanTypeName(match[1]),
                quantity,
                group: match[3],
                category: match[4],
                size: match[5] as 'XLarge' | 'Large' | 'Medium' | 'Small',
                slot: match[6] as 'High' | 'Medium' | 'Low' | 'Rigs' | string,
                volume: parseNumber(match[7]) || 0,
                metaLevel: match[9] === "None" ? undefined : match[9],
                techLevel: match[10] === "None" ? undefined : match[10],
                priceEstimate: parseNumber(match[11]),
            });
        }

        assetList.items.sort((a, b) => `${a}`.localeCompare(`${b}`));
        return [assetList, rest];
    }
}
const regexPattern = [
    `^([\\S ]*)`,                               // Name
    `\\t?(${bigNumberRegex}*)`,                   // Quantity
    `(?:\\t([\\S ]*))?`,                        // Group
    `(?:\\t([\\S ]*))?`,                        // Category
    `(?:\\t(XLarge|Large|Medium|Small|))?`,     // Size
    `(?:\\t(High|Medium|Low|Rigs|[\\d ]*))?`,   // Slot
    `(?:\\t(${bigNumberRegex}*) (m3|м\\^3))?`,   // Volume
    `(?:\\t([\\d]+|None|))?`,                        // Meta level
    `(?:\\t([\\d]+|None|))?`,                        // Tech level
    `(?:\\t(${bigNumberRegex}*) ISK)?$`          // Price estimate
].join("");

const reAssetList = new RegExp(regexPattern);  // 'g' for global matches, 'm' for multiline support

