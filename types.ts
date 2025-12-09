export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  description: string;
  image: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89990,
    mileage: 150,
    description: 'Experience the future of driving with the ludicrously fast Model S Plaid. Features a yoke steering wheel and 1020 horsepower.',
    image: 'https://picsum.photos/seed/tesla/800/600'
  },
  {
    id: '2',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    price: 114000,
    mileage: 3400,
    description: 'The iconic sports car. Timeless design meets modern performance. Finished in GT Silver Metallic with a Bordeaux Red interior.',
    image: 'https://picsum.photos/seed/porsche/800/600'
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Bronco Raptor',
    year: 2024,
    price: 86000,
    mileage: 50,
    description: 'Built for the wild. This Bronco Raptor features 37-inch tires, a heavy-duty suspension, and a powerful EcoBoost engine.',
    image: 'https://picsum.photos/seed/bronco/800/600'
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'G 63 AMG',
    year: 2022,
    price: 179000,
    mileage: 12000,
    description: 'The ultimate status symbol. Boxy, loud, and incredibly luxurious. This G-Wagon commands attention wherever it goes.',
    image: 'https://picsum.photos/seed/g63/800/600'
  },
  {
    id: '5',
    make: 'Rivian',
    model: 'R1T',
    year: 2023,
    price: 73000,
    mileage: 5600,
    description: 'The electric adventure truck. Quad-motor performance, incredible off-road capability, and a built-in camp kitchen.',
    image: 'https://picsum.photos/seed/rivian/800/600'
  }
];