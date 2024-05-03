import { uniqBy } from 'lodash';
import {Item, Parser} from "./parser-interface";
import {bigNumberRegex, CleanTypeName, regexParseLines} from "./utils";
import {parseNumber} from "./number-parsing";
import {Input} from "./input";

export class Contract implements Parser {
    items: ContractItem[] = [];

    name(): string {
        return "contract";
    }

    parse(input: Input): [ Contract, Input ] {
        let contract = new Contract();
        let [matches, rest] = regexParseLines(reContract, input);
        let [matches2, rest2] = regexParseLines(reContractShort, rest);
        let [matches3, rest3] = regexParseLines(reContractName, rest2);

        // Collect items
        let matchgroup: { [key: string]: ContractItem } = {};
        [...Object.values(matches), ...Object.values(matches2), ...Object.values(matches3)].forEach(match => {
            const bpc = reBPCDetails.exec(match[5]);
            const isBPC = bpc !== null;
            let bpcRuns = isBPC ? parseNumber(bpc[1] ?? '1') : 0;

            let item = new ContractItem();
            item.name = CleanTypeName(match[1]);
            item.type = match[3] ?? "";
            item.category = match[4] ?? "";
            item.details = match[5] ?? "";
            item.fitted = match[5]?.startsWith("Fitted") ?? false;
            item.bpc = isBPC;
            item.bpcRuns = bpcRuns;
            item.quantity += parseNumber(match[2]);

            if (matchgroup[item.name]) {
                matchgroup[item.name].quantity += item.quantity;
            } else {
                matchgroup[item.name] = item;
            }
        });

        // Add unique items with totals
        contract.items = uniqBy(Object.values(matchgroup), 'name');
        contract.items.sort((a, b) => a.name.localeCompare(b.name));

        return [ contract, rest3 ];
    }
}

// TypeScript equivalent of the Go's ContractItem struct
export class ContractItem implements Item {
    name: string = '';
    quantity: number = 0; // Using number instead of int64
    type: string = '';
    category: string = '';
    details: string = '';
    fitted: boolean = false;
    bpc: boolean = false;
    bpcRuns: number = 0; // Using number instead of int64
}

const reContract = new RegExp([
    '^([\\S ]*)\\t',                // Name
    '(' + bigNumberRegex + '*)\\t', // Quantity
    '([\\S ]*)\\t',                 // type
    '([\\S ]*)\\t',                 // Category
    '([\\S ]*)$',                   // Details
].join(''));

const reContractShort = new RegExp([
    '^([\\S ]*)\\t',                // Name
    '(' + bigNumberRegex + '*)\\t', // Quantity
    '([\\S ]*)$',                   // type
].join(''));

const reContractName = new RegExp([
    '^([\\S ]*) (?:x|X) ',          // Name
    '(' + bigNumberRegex + '+) ',   // Quantity
    '\\(Item Exchange\\)[\\s]*',
].join(''));

const reBPCDetails = new RegExp('BLUEPRINT COPY(?: - Runs: ([\\d]+) - )?.*');