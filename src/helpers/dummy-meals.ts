export interface MealsInterface {
  id: string,
  amount?: number,
  name: string,
  description?: string,
  price: number,
}

export const DUMMY_MEALS: MealsInterface[] = [
  {
    id: 'm1',
    amount: 0,
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    amount: 0,
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    amount: 0,
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    amount: 0,
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];