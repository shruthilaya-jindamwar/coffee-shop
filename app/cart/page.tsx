'use client';

import Link from 'next/link';

export default function Cart() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">☕ Your Cart</h1>
        <Link href="/" className="text-amber-700 hover:text-amber-900">
          ← Back to Menu
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <p className="text-gray-600 text-center py-8">
            Your cart is empty. Add some coffee from the menu!
          </p>
        </div>

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
