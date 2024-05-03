export function CleanTypeName(s: string): string {
    return s.trim().replace(/\*+$/, '');
}

export const bigNumberRegex = "[\\d,'’\\. \\u00a0\\u202f]";  // Includes digits, comma, dot, regular space, and specific Unicode spaces

export function regexParseLines(re: RegExp, input: string[]): [Record<number, string[]>, string[]] {
    const matches: Record<number, string[]> = {};
    const rest: string[] = [];

    input.forEach((line, i) => {
        const match = line.match(re);
        if (!match) {
            rest.push(line);
        } else {
            matches[i] = match;
        }
    });

    return [matches, rest];
}
