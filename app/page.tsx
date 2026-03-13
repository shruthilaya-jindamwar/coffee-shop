'use client';

import { useState } from 'react';
import Link from 'next/link';

type CoffeeItem = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const coffeeMenu: CoffeeItem[] = [
  { id: 1, name: 'Espresso', price: 3.5, description: 'Strong and bold' },
  { id: 2, name: 'Cappuccino', price: 4.5, description: 'Creamy and smooth' },
  { id: 3, name: 'Latte', price: 4.0, description: 'Mild and milky' },
  { id: 4, name: 'Americano', price: 3.0, description: 'Classic coffee' },
  { id: 5, name: 'Mocha', price: 5.0, description: 'Chocolate delight' },
];

export default function Home() {
  const [cart, setCart] = useState<CoffeeItem[]>([]);

  const addToCart = (item: CoffeeItem) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">☕ Coffee Shop</h1>
        <div className="flex justify-between items-center">
          <p className="text-amber-700">Welcome to our cozy coffee shop</p>
          <Link 
            href="/cart" 
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Cart ({cart.length})
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-900 mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-700">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
