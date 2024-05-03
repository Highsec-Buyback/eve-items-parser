import {AllParser} from "./parsers/all";
import {StringToInput} from "./parsers/input";
import {Item} from "./parsers/parser-interface";

export interface ParseResult {
  items: Item[];
  unparsed: string[];
}

export function parse(input: string): ParseResult {
  if (!input?.length) {
    return {
      items: [],
      unparsed: [],
    }
  }
  const [result, rest] = new AllParser().parse(StringToInput(input));
  return {items: result.items, unparsed: rest};
}

