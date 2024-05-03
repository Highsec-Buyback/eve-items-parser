export const viewContentsTestCases = [
    {
        description: "Routable",
        input: `1600mm Reinforced Steel Plates II\tArmor Reinforcer\tLow Slot\t1\n100MN Microwarpdrive II\tPropulsion Module\tMedium Slot\t1\nBouncer II\tCombat Drone\tDrone Bay\t1\nBouncer II\tCombat Drone\tDrone Bay\t1\nNitrogen Isotopes\tIce Product\tFuel Bay\t20000\nDrone Link Augmentor II\tDrone Control Range Module\tHigh Slot\t1\nLarge Micro Jump Drive\tMicro Jump Drive\tCargo Hold\t1\nTengu Defensive - Adaptive Shielding\tDefensive Systems\tSubsystem\t1\nLarge Trimark Armor Pump I\tRig Armor\tRig Slot\t1\nMedium Electrochemical Capacitor Booster I\tCapacitor Booster\tMedium Slot\t1\nGiant Secure Container\tSecure Cargo Container\t\t1`,
        expected: {
            items: [
                { name: "100MN Microwarpdrive II", group: "Propulsion Module", location: "Medium Slot", quantity: 1 },
                { name: "1600mm Reinforced Steel Plates II", group: "Armor Reinforcer", location: "Low Slot", quantity: 1 },
                { name: "Bouncer II", group: "Combat Drone", location: "Drone Bay", quantity: 2 },
                { name: "Drone Link Augmentor II", group: "Drone Control Range Module", location: "High Slot", quantity: 1 },
                { name: "Giant Secure Container", group: "Secure Cargo Container", location: "", quantity: 1 },
                { name: "Large Micro Jump Drive", group: "Micro Jump Drive", location: "Cargo Hold", quantity: 1 },
                { name: "Large Trimark Armor Pump I", group: "Rig Armor", location: "Rig Slot", quantity: 1 },
                { name: "Medium Electrochemical Capacitor Booster I", group: "Capacitor Booster", location: "Medium Slot", quantity: 1 },
                { name: "Nitrogen Isotopes", group: "Ice Product", location: "Fuel Bay", quantity: 20000 },
                { name: "Tengu Defensive - Adaptive Shielding", group: "Defensive Systems", location: "Subsystem", quantity: 1 }
            ]
        },
        expectedRest: {},
        runForAll: true
    },
    {
        description: "Routable",
        input: `Festival Launcher\tFestival Launcher\t1\nFestival Launcher\tFestival Launcher\t1\nHornet EC-300\tElectronic Warfare Drone\t50\nMen's 'Esquire' Coat (red/gold)\tOuter\t1`,
        expected: {
            items: [
                { name: "Festival Launcher", group: "Festival Launcher", location: "", quantity: 2 },
                { name: "Hornet EC-300", group: "Electronic Warfare Drone", location: "", quantity: 50 },
                { name: "Men's 'Esquire' Coat (red/gold)", group: "Outer", location: "", quantity: 1 }
            ]
        },
        expectedRest: {},
        runForAll: true
    },
    {
        description: "Ore Hold - Issue #28",
        input: `Compressed Vivid Hemorphite\tHemorphite\tOre Hold\t51`,
        expected: {
            items: [
                { name: "Compressed Vivid Hemorphite", group: "Hemorphite", location: "Ore Hold", quantity: 51 }
            ]
        },
        expectedRest: {},
        runForAll: true
    },
    {
        description: "Fighters - Issue #94",
        input: `Einherji II\tLight Fighter\tFighter Bay\t27`,
        expected: {
            items: [
                { name: "Einherji II", group: "Light Fighter", location: "Fighter Bay", quantity: 27 }
            ]
        },
        expectedRest: {},
        runForAll: true
    },
    {
        description: "Planetary Commodities Hold",
        input: `Transmitter\tRefined Commodities - Tier 2\tPlanetary Commodities Hold\t5605`,
        expected: {
            items: [
                { name: "Transmitter", group: "Refined Commodities - Tier 2", location: "Planetary Commodities Hold", quantity: 5605 }
            ]
        },
        expectedRest: {},
        runForAll: true
    }
];
