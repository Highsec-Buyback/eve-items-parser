export const piTestCases = [
    {
        description: "Routable",
        input: `331.0	Aqueous Liquids	Not routed\n331	Aqueous Liquids	Routed`,
        expected: {
            items: [
                { name: "Aqueous Liquids", quantity: 331, volume: 0, routed: false },
                { name: "Aqueous Liquids", quantity: 331, volume: 0, routed: true }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Quantities as floats",
        input: `\tAqueous Liquids\t305.0\t3.05`,
        expected: {
            items: [
                { name: "Aqueous Liquids", quantity: 305.0, volume: 3.05 }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Short format",
        input: `\tAqueous Liquids\t205.0`,
        expected: {
            items: [
                { name: "Aqueous Liquids", quantity: 205.0 }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "PI New",
        input: `\tReactive Metals\t27080.0\t10290.4 m3`,
        expected: {
            items: [
                { name: "Reactive Metals", quantity: 27080.0, volume: 10290.4 }
            ]
        },
        expectedRest: [],
        runForAll: true
    }
];
