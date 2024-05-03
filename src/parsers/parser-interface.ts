import {Input} from "./input";

export interface Item {
    name: string;
    quantity: number;
}

export interface Parser {
    parse(input: Input): [{items: Item[]}, Input];
}