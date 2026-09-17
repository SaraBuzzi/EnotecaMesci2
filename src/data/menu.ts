export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

export interface MenuSection {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const wineMenu: MenuSection[] = [
  {
    title: 'Red Wines',
    subtitle: 'By the glass · 6oz pour',
    items: [
      {
        name: 'Domaine de la Côte, Pinot Noir',
        description: 'Santa Rita Hills, 2021. Bright cherry, earthy undertones, silky tannins.',
        price: '$18',
        tags: ['Estate', 'Limited'],
      },
      {
        name: 'Château Lestage, Listrac-Médoc',
        description: 'Bordeaux, 2018. Cabernet Sauvignon blend with cassis, cedar, and graphite.',
        price: '$16',
        tags: ['Classic'],
      },
      {
        name: 'Sassicaia, Tenuta San Guido',
        description: 'Bolgheri, 2019. Italy\'s most celebrated Super Tuscan. Bold and structured.',
        price: '$42',
        tags: ['Reserve', 'Allocated'],
      },
      {
        name: 'Penfolds, Bin 389 Cabernet Shiraz',
        description: 'South Australia, 2019. Rich blackberry, dark chocolate, and spice.',
        price: '$22',
      },
      {
        name: 'Côte-Rôtie, Domaine Jamet',
        description: 'Northern Rhône, 2020. Syrah with violet, bacon fat, and black pepper.',
        price: '$24',
        tags: ['Natural'],
      },
      {
        name: 'Barolo, Giuseppe Mascarello',
        description: 'Piedmont, 2018. Nebbiolo at its finest — rose, tar, and dried cherry.',
        price: '$28',
        tags: ['Reserve'],
      },
    ],
  },
  {
    title: 'White Wines',
    subtitle: 'By the glass · 6oz pour',
    items: [
      {
        name: 'Domaine Leflaive, Puligny-Montrachet',
        description: 'Burgundy, 2020. Chardonnay with hazelnut, white peach, and mineral drive.',
        price: '$26',
        tags: ['Estate'],
      },
      {
        name: 'Sancerre, Henri Bourgeois',
        description: 'Loire Valley, 2022. Sauvignon Blanc with gooseberry, citrus, and flint.',
        price: '$15',
      },
      {
        name: 'Grüner Veltliner, Weingut Hirtzberger',
        description: 'Wachau, 2022. White pepper, green apple, and a laser-sharp finish.',
        price: '$14',
        tags: ['Natural'],
      },
      {
        name: 'Riesling, Dr. Loosen, Kabinett',
        description: 'Mosel, 2022. Off-dry with apricot, slate, and vibrant acidity.',
        price: '$13',
      },
      {
        name: 'Chablis, Domaine Vocoret',
        description: 'Burgundy, 2021. Pure Chardonnay with oyster shell, lemon, and green apple.',
        price: '$17',
      },
    ],
  },
  {
    title: 'Sparkling & Rosé',
    subtitle: 'Effervescent & seasonal',
    items: [
      {
        name: 'Champagne, Pol Roger Brut Réserve',
        description: 'Épernay, NV. Brioche, pear, and fine persistent bubbles.',
        price: '$22',
        tags: ['Champagne'],
      },
      {
        name: 'Franciacorta, Bellavista Alma',
        description: 'Lombardy, NV. Italy\'s answer to Champagne — elegant and creamy.',
        price: '$18',
      },
      {
        name: 'Prosecco, Valdobbiadene Superiore',
        description: 'Veneto, NV. Crisp, floral, and refreshing with a light mousse.',
        price: '$12',
      },
      {
        name: 'Bandol Rosé, Domaine Tempier',
        description: 'Provence, 2022. Mourvèdre-driven with wild herbs, strawberry, and saline.',
        price: '$16',
        tags: ['Seasonal'],
      },
      {
        name: 'Cava, Recaredo Brut Nature',
        description: 'Penedès, 2018. Bone-dry, toasty, and complex from extended lees aging.',
        price: '$14',
        tags: ['Natural'],
      },
    ],
  },
  {
    title: 'Cocktails & Spirits',
    subtitle: 'Crafted with intention',
    items: [
      {
        name: 'The Negroni',
        description: 'Gin, Campari, sweet vermouth. Stirred, served over a large rock with orange peel.',
        price: '$14',
      },
      {
        name: 'Vieux Carré',
        description: 'Rye, cognac, Bénédictine, bitters. A New Orleans classic with depth and warmth.',
        price: '$16',
        tags: ['Classic'],
      },
      {
        name: 'Sazerac',
        description: 'Rye, Peychaud\'s bitters, absinthe rinse. Served neat in a chilled coupe.',
        price: '$15',
      },
      {
        name: 'Sherry Cobbler',
        description: 'Oloroso sherry, orange, sugar. Crushed ice, served with a straw. A 19th-century delight.',
        price: '$13',
      },
      {
        name: 'Macallan 12, Double Cask',
        description: 'Highland single malt. Sherry-seasoned oak, dried fruit, and spice.',
        price: '$20',
      },
      {
        name: 'Diplomático Reserva Exclusiva',
        description: 'Venezuelan rum, aged 12 years. Toffee, vanilla, and a velvety finish.',
        price: '$18',
      },
    ],
  },
];

export const foodMenu: MenuSection[] = [
  {
    title: 'Small Plates',
    subtitle: 'Designed for sharing',
    items: [
      {
        name: 'Charcuterie Board',
        description: 'A curated selection of cured meats, aged cheeses, house preserves, and warm bread.',
        price: '$28',
        tags: ['For Two'],
      },
      {
        name: 'Burrata & Heirloom Tomato',
        description: 'Creamy burrata, heirloom tomatoes, basil oil, aged balsamic, and sea salt.',
        price: '$16',
        tags: ['Vegetarian'],
      },
      {
        name: 'Duck Liver Pâté',
        description: 'House-made chicken liver mousse, fig jam, and toasted brioche.',
        price: '$14',
      },
      {
        name: 'Marinated Castelvetrano Olives',
        description: 'Warmed with citrus zest, fennel, and chili flakes.',
        price: '$9',
        tags: ['Vegan'],
      },
      {
        name: 'Beef Tartare',
        description: 'Hand-cut tenderloin, capers, shallots, quail yolk, and crostini.',
        price: '$18',
      },
      {
        name: 'Grilled Octopus',
        description: 'Spanish octopus, fingerling potatoes, romesco sauce, and micro herbs.',
        price: '$19',
      },
    ],
  },
  {
    title: 'Larger Plates',
    subtitle: 'Hearty and seasonal',
    items: [
      {
        name: 'Braised Short Rib',
        description: '48-hour braised beef short rib, creamy polenta, and gremolata.',
        price: '$32',
        tags: ['Signature'],
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Carnaroli rice, porcini, truffle, and aged Parmigiano-Reggiano.',
        price: '$24',
        tags: ['Vegetarian'],
      },
      {
        name: 'Seared Scallops',
        description: 'Diver scallops, cauliflower purée, brown butter, and crispy capers.',
        price: '$29',
      },
      {
        name: 'Lamb Chops',
        description: 'Herb-crusted Australian lamb, ratatouille, and mint jus.',
        price: '$34',
      },
      {
        name: 'Roasted Half Chicken',
        description: 'Brick-pressed Cornish hen, lemon, thyme, and pommes purée.',
        price: '$26',
      },
    ],
  },
  {
    title: 'Desserts',
    subtitle: 'Sweet conclusions',
    items: [
      {
        name: 'Dark Chocolate Fondant',
        description: 'Warm 70% Valrhona chocolate cake, crème anglaise, and gold leaf.',
        price: '$12',
        tags: ['Signature'],
      },
      {
        name: 'Crème Brûlée',
        description: 'Madagascar vanilla custard with a caramelized sugar crust.',
        price: '$10',
      },
      {
        name: 'Cheese Selection',
        description: 'Three artisan cheeses, honeycomb, walnut bread, and dried fruit.',
        price: '$18',
      },
      {
        name: 'Olive Oil Cake',
        description: 'Tuscan olive oil cake, mascarpone cream, and candied citrus.',
        price: '$10',
        tags: ['Vegetarian'],
      },
    ],
  },
];
