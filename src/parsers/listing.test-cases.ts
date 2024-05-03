export const listingTestCases = [
    {
        description: "No quantity",
        input: "Minmatar Shuttle",
        expected: {
            items: [{ name: "Minmatar Shuttle", quantity: 1 }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "quantity prefixed with x",
        input: "10x Minmatar Shuttle",
        expected: {
            items: [{ name: "Minmatar Shuttle", quantity: 10 }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "quantity postfixed",
        input: "Heavy Assault Missile Launcher II 10",
        expected: {
            items: [{ name: "Heavy Assault Missile Launcher II", quantity: 10 }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "with thousands separators",
        input: "9'584'701 x Tritanium\nTritanium 9'584'702\nTritanium x 9'584'703\n9,584,704 x Tritanium",
        expected: {
            items: [{ name: "Tritanium", quantity: 38338810 }]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "with whitespace",
        input: " Tritanium\n Tritanium\nTritanium ",
        expected: {
            items: [{ name: "Tritanium", quantity: 3 }]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "with capital x",
        input: "Tritanium x 1\nTritanium X 1",
        expected: {
            items: [{ name: "Tritanium", quantity: 2 }]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "with starting whitespace",
        input: " 450	125mm Railgun I\n 150	Griffin\n 150	Maulus\n 300	Scan Resolution Dampening Script\n 150	Signal Distortion Amplifier I\n 150	Small Shield Extender I\n 600	Stasis Webifier I\n 300	Targeting Range Dampening Script\n 300	Tracking Speed Disruption Script\n1200	Warrior I",
        expected: {
            items: [
                { name: "125mm Railgun I", quantity: 450 },
                { name: "Griffin", quantity: 150 },
                { name: "Maulus", quantity: 150 },
                { name: "Scan Resolution Dampening Script", quantity: 300 },
                { name: "Signal Distortion Amplifier I", quantity: 150 },
                { name: "Small Shield Extender I", quantity: 150 },
                { name: "Stasis Webifier I", quantity: 600 },
                { name: "Targeting Range Dampening Script", quantity: 300 },
                { name: "Tracking Speed Disruption Script", quantity: 300 },
                { name: "Warrior I", quantity: 1200 }
            ]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "quantities with a decimal, for some reason",
        input: "123.12	Griffin\n456.3	Maulus",
        expected: {
            items: [
                { name: "Griffin", quantity: 123 },
                { name: "Maulus", quantity: 456 }
            ]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "with ending whitespace",
        input: "Compressed Iridescent Gneiss x 109 ",
        expected: {
            items: [
                { name: "Compressed Iridescent Gneiss", quantity: 109 }
            ]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "with beginning whitespace",
        input: "1865 Compressed Glossy Scordite\n 105 Compressed Brilliant Gneiss\n  27 Compressed Jet Ochre",
        expected: {
            items: [
                { name: "Compressed Brilliant Gneiss", quantity: 105 },
                { name: "Compressed Glossy Scordite", quantity: 1865 },
                { name: "Compressed Jet Ochre", quantity: 27 }
            ]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "Singularity Radiation Convertor",
        input: "2  Singularity Radiation Convertor",
        expected: {
            items: [
                { name: "Singularity Radiation Convertor", quantity: 2 }
            ]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "With colon after item name",
        input: "Tritanium: 53333",
        expected: {
            items: [
                { name: "Tritanium", quantity: 53333 }
            ]
        },
        expectedRest: [],
        runForAll: false
    }
];
