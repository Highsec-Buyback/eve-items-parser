import p from "number-parsing";

export function parseNumber(input: string): number | undefined {
    if (input == undefined) {
        return undefined;
    }
    const sanitized = input.replace(/[\s'’]/g, '');
    return p(sanitized, {
        us: 0.75,
        de: 0.25,
    });
}