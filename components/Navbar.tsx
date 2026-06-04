'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/wat-is-social-gaming', label: 'Wat is social gaming?' },
    { href: '/groepsactiviteiten-eindhoven', label: 'Groepsactiviteiten' },
    { href: '/bedrijfsuitje-eindhoven', label: 'Bedrijfsuitje' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl text-black">
          Social Gaming Eindhoven
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-gray-50">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-700 hover:text-accent transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
