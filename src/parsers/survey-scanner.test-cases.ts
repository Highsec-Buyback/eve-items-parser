export const surveyScanTestCases = [
    {
        description: "Basic",
        input: `Pyroxeres\t1,919\t5,842 m\nPyroxeres\t11,595\t7,180 m\nPyroxeres\t5,414\t6,134 m\nScordite\nVeldspar\nVeldspar\t10\t12 km\nVeldspar\t26,644\t6,115 m\nVeldspar\t26,935\t12 km`,
        expected: {
            items: [
                { name: "Pyroxeres", quantity: 1919, distance: "5,842 m" },
                { name: "Pyroxeres", quantity: 11595, distance: "7,180 m" },
                { name: "Pyroxeres", quantity: 5414, distance: "6,134 m" },
                { name: "Veldspar", quantity: 10, distance: "12 km" },
                { name: "Veldspar", quantity: 26644, distance: "6,115 m" },
                { name: "Veldspar", quantity: 26935, distance: "12 km" }
            ]
        },
        expectedRest: [],
        runForAll: true
    }
];
