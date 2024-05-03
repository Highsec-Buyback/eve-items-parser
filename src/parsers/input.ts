export type Input = string[]

// Converts a string into an Input object represented as a Record<number, string>
export function StringToInput(s: string): Input {
    s = s.replace(/\r/g, ""); // Remove carriage returns
    return s.split("\n");
}
