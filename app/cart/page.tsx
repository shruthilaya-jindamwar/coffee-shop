'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">☕ Your Cart</h1>
        <Link href="/" className="text-amber-700 hover:text-amber-900">
          ← Back to Menu
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <p className="text-gray-600 text-center py-8">
              Your cart is empty. Add some coffee from the menu!
            </p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-amber-600 text-white w-8 h-8 rounded hover:bg-amber-700 transition"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-amber-600 text-white w-8 h-8 rounded hover:bg-amber-700 transition"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-lg font-bold text-amber-900 w-20 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center text-2xl font-bold text-amber-900">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-amber-100 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">
            Enjoying this project?
          </h2>
          <p className="text-amber-800 mb-6">
            Support the developer and buy me a coffee!
          </p>
          <a
            href="https://www.buymeacoffee.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            ☕ Buy Me a Coffee
          </a>
        </div>
      </main>
    </div>
  );
}
