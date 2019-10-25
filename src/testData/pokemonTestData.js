const pokemonTestData = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子"
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defence: 49,
      SpAttack: 65,
      SpDefence: 65,
      Speed: 45
    }
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草"
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defence: 63,
      SpAttack: 80,
      SpDefence: 80,
      Speed: 60
    }
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花"
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defence: 83,
      SpAttack: 100,
      SpDefence: 100,
      Speed: 80
    }
  }
];

export default pokemonTestData;
