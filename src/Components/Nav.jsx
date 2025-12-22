import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Nav.jsx
export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.documentElement.style.scrollBehavior = 'smooth'; // ✅ enables smooth scroll
  }, [open]);

  const navLinks = [
    { label: 'Home', href: '#home', color: 'bg-pink-500' },
    { label: 'About', href: '#about', color: 'bg-[#CC66DA]' },
    { label: 'Meet Our Team', href: '#team', color: 'bg-[#9929EA]' },
    { label: 'Contact', href: '#contact', color: 'bg-[#FAEB92]' },
  ];

  return (
    <nav className="bg-black sticky top-0 text-white z-50" style={{ fontFamily: 'Cal Sans' }}>
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <mark>offJson</mark>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <mark className={`hover:bg-yellow-400 ${link.color} transition`}>{link.label}</mark>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Button */}
        <div className="sm:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-[#1A1A1D] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <mark className="text-xl font-bold">Menu</mark>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-4 text-lg">
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => setOpen(false)}>
              <a href={link.href}>
                <mark className={`hover:bg-yellow-400 ${link.color} transition`}>{link.label}</mark>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
}