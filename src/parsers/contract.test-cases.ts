export const contractTestCases = [
    {
        description: "Simple",
        input: "Rokh	1	Battleship	Ship	",
        expected: {
            items: [{ name: "Rokh", quantity: 1, type: "Battleship", category: "Ship" }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Fitted",
        input: "Rokh	1	Battleship	Ship	\nLarge Core Defense Field Extender I	1	Rig Shield	Module	Fitted",
        expected: {
            items: [
                { name: "Large Core Defense Field Extender I", quantity: 1, type: "Rig Shield", category: "Module", details: "Fitted", fitted: true },
                { name: "Rokh", quantity: 1, type: "Battleship", category: "Ship", details: "" }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Damaged",
        input: "Rokh	1	Battleship	Ship	\nScorch M	1	Advanced Pulse Laser Crystal	Charge	Fitted 72% damaged\nScorch L	2	Advanced Pulse Laser Crystal	Charge	 1% damaged",
        expected: {
            items: [
                { name: "Rokh", quantity: 1, type: "Battleship", category: "Ship", details: "" },
                { name: "Scorch L", quantity: 2, type: "Advanced Pulse Laser Crystal", category: "Charge", details: " 1% damaged" },
                { name: "Scorch M", quantity: 1, type: "Advanced Pulse Laser Crystal", category: "Charge", details: "Fitted 72% damaged", fitted: true }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Grouped",
        input: "Scorch M	1	Advanced Pulse Laser Crystal	Charge	Fitted 72% damaged\nScorch M	1	Advanced Pulse Laser Crystal	Charge	Fitted 72% damaged\nScorch M	2	Advanced Pulse Laser Crystal	Charge	Fitted 72% damaged\nScorch M	3	Advanced Pulse Laser Crystal	Charge	Fitted 72% damaged",
        expected: {
            items: [{ name: "Scorch M", quantity: 7, type: "Advanced Pulse Laser Crystal", category: "Charge", details: "Fitted 72% damaged", fitted: true }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "BPC",
        input: "Armageddon Blueprint	1	Battleship Blueprint	Blueprint	BLUEPRINT COPY - Runs: 9 - Material Level: 29 - Productivity Level: 0\nTyphoon Blueprint	1	Battleship Blueprint	Blueprint	BLUEPRINT COPY",
        expected: {
            items: [
                { name: "Armageddon Blueprint", quantity: 1, type: "Battleship Blueprint", category: "Blueprint", details: "BLUEPRINT COPY - Runs: 9 - Material Level: 29 - Productivity Level: 0", bpc: true, bpcRuns: 9 },
                { name: "Typhoon Blueprint", quantity: 1, type: "Battleship Blueprint", category: "Blueprint", details: "BLUEPRINT COPY", bpc: true, bpcRuns: 1 }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Over 9000",
        input: "425mm Railgun I	9000	Hybrid Weapon",
        expected: {
            items: [{ name: "425mm Railgun I", quantity: 9000, type: "Hybrid Weapon" }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Nothing but ship (fail)",
        input: "Rokh",
        expected: { items: [] },
        expectedRest: [ "Rokh" ],
        runForAll: false
    },
    {
        description: "Single-quote comma separator",
        input: "Rokh	12'000	Battleship	Ship	",
        expected: {
            items: [{ name: "Rokh", quantity: 12000, type: "Battleship", category: "Ship" }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Russian with asterisks",
        input: "Hornet EC-300*	10	Дрон электронного противодействия*	Дрон*	Отсек для дронов\nHornet EC-300*	10	Дрон электронного противодействия*	Дрон*	Отсек для дронов\nPraetor II*	1	Боевой дрон*	Дрон*	Отсек для дронов",
        expected: {
            items: [
                { name: "Hornet EC-300", quantity: 20, type: "Дрон электронного противодействия*", category: "Дрон*", details: "Отсек для дронов" },
                { name: "Praetor II", quantity: 1, type: "Боевой дрон*", category: "Дрон*", details: "Отсек для дронов" }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "With spaces for separator",
        input: "Zydrine	10 102	Mineral	Material	",
        expected: {
            items: [{ name: "Zydrine", quantity: 10102, type: "Mineral", category: "Material" }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Item exchange",
        input: "Zircon x 21163 (Item Exchange) ",
        expected: {
            items: [{ name: "Zircon", quantity: 21163 }]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "German thousands separator",
        input: "Chiral Structures*	8’865	Grundlegende Güter – Rang 1*	Planetarische Güter*	",
        expected: {
            items: [{ name: "Chiral Structures", quantity: 8865, type: "Grundlegende Güter – Rang 1*", category: "Planetarische Güter*" }]
        },
        expectedRest: [],
        runForAll: true
    }
];
