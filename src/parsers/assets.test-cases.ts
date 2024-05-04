const assetsTestCases = [
    {
        description: "Simple",
        input: "Hurricane	1	Combat Battlecruiser",
        expected: {
            items: [{ name: "Hurricane", group: "Combat Battlecruiser", quantity: 1 }]
        },
        expectedRest: [],
        runForAll: false
    },
    {
        description: "Typical",
        input: "720mm Gallium Cannon	1	Projectile Weapon	Medium	High	10 m3\nDamage Control II	1	Damage Control		Low	5 m3\nExperimental 10MN Microwarpdrive I	1	Propulsion Module		Medium	10 m3",
        expected: {
            items: [
                { name: "720mm Gallium Cannon", quantity: 1, group: "Projectile Weapon", category: "Medium", slot: "High", volume: 10 },
                { name: "Damage Control II", quantity: 1, group: "Damage Control", slot: "Low", volume: 5 },
                { name: "Experimental 10MN Microwarpdrive I", quantity: 1, group: "Propulsion Module", size: "Medium", volume: 10 }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "Full",
        input: "200mm AutoCannon I	1	Projectile Weapon	Module	Small	High	5 m3	1\n10MN Afterburner II	1	Propulsion Module	Module	Medium	5 m3	5	2\nWarrior II	9",
        expected: {
            items: [
                { name: "200mm AutoCannon I", quantity: 1, group: "Projectile Weapon", category: "Module", size: "Small", slot: "High", metaLevel: "1", volume: 5 },
                { name: "10MN Afterburner II", quantity: 1, group: "Propulsion Module", category: "Module", size: "Medium", metaLevel: "5", techLevel: "2", volume: 5 },
                { name: "Warrior II", quantity: 9 }
            ]
        },
        expectedRest: [],
        runForAll: true
    },
    {
        description: "With Volumes",
        input: "Sleeper Data Library	1080	Sleeper Components			10.82 m3",
        expected: {
            items: [{ name: "Sleeper Data Library", quantity: 1080, group: "Sleeper Components", volume: 10.82 }]
        },
        expectedRest: {},
        runForAll: true
    },
    {
        description: "With thousands separators",
        input: "Sleeper Data Library	1,080\nSleeper Data Library	1'080\nSleeper Data Library	1.080",
        expected: {
            items: [
                { name: "Sleeper Data Library", quantity: 1080 },
                { name: "Sleeper Data Library", quantity: 1080 },
                { name: "Sleeper Data Library", quantity: 1080 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With empty quantity",
        input: "Sleeper Data Library	",
        expected: {
            items: [{ name: "Sleeper Data Library", quantity: 1 }]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With asterisk",
        input: "Armor Plates*	477	Geborgene Materialien*",
        expected: {
            items: [
                { name: "Armor Plates", quantity: 477, group: "Geborgene Materialien*" }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With spaces in numbers",
        input: "Robotics	741	Specialized Commodities			4 446 m3	76 705 081,83 ISK",
        expected: {
            items: [
                { name: "Robotics", quantity: 741, group: "Specialized Commodities", priceEstimate: 76705081.83, volume: 4446 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With 'spaces' in numbers",
        input: "Guardian Angels 'Advanced' Cerebral Accelerator	1	Booster		10	1 m3	37 805 997.92 ISK",
        expected: {
            items: [
                { name: "Guardian Angels 'Advanced' Cerebral Accelerator", quantity: 1, group: "Booster", slot: "10", volume: 1.0, priceEstimate: 37805997.92 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With 'spaces' in numbers 2",
        input: "Mexallon\t1\u00a0667\u00a0487\tMineral\t\t\t16\u00a0674,87 m3\t128\u00a0696\u00a0646,66 ISK",
        expected: {
            items: [
                { name: "Mexallon", quantity: 1667487, group: "Mineral", volume: 16674.87, priceEstimate: 128696646.66 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "m^3",
        input: "Evaporite Deposits\t1 452\tMoon Materials\t\t\t72,60 м^3\t7 533 164,76 ISK",
        expected: {
            items: [
                { name: "Evaporite Deposits", quantity: 1452, group: "Moon Materials", volume: 72.60, priceEstimate: 7533164.76 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "Without quantity",
        input: "125mm Prototype Gauss Gun\t\tHybrid Weapon\tModule\t4\t1\t376.718,32 ISK",
        expected: {
            items: [
                { name: "125mm Prototype Gauss Gun", quantity: 1, group: "Hybrid Weapon", volume: 0, priceEstimate: 376718.32 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With None as tech level",
        input: "Agency 'Pyrolancea' DB3 Dose I\t1\tBooster\tImplant\t\tNone\t3.964.531,73 ISK",
        expected: {
            items: [
                { name: "Agency 'Pyrolancea' DB3 Dose I", quantity: 1, group: "Booster", volume: 0, priceEstimate: 3964531.73 }
            ]
        },
        expectedRest: {},
        runForAll: false
    },
    {
        description: "With None as meta level",
        input: "Agency 'Pyrolancea' DB3 Dose I\t1\tBooster\tImplant\tNone\t\t3.964.531,73 ISK",
        expected: {
            items: [
                { name: "Agency 'Pyrolancea' DB3 Dose I", quantity: 1, group: "Booster", volume: 0, priceEstimate: 3964531.73 }
            ]
        },
        expectedRest: {},
        runForAll: false
    }
];
export { assetsTestCases };
