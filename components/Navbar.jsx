'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',        label: 'Home' },
  { href: '/menu',    label: 'Menu' },
  { href: '/history', label: 'History' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f0a04]/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-playfair text-xl text-[#C0392B] tracking-wide">Schuberg's</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Bar & Grill · Est. 1933</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-[#C0392B]'
                    : 'text-stone-300 hover:text-[#C0392B]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 border border-[#C0392B] text-[#C0392B] text-xs tracking-widest uppercase hover:bg-[#C0392B] hover:text-white transition-all duration-200"
            >
              Find Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-stone-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-stone-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-stone-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#0f0a04]/98 backdrop-blur-sm px-6 pb-6 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase py-2 border-b border-stone-800 transition-colors ${
                pathname === href ? 'text-[#C0392B]' : 'text-stone-300 hover:text-[#C0392B]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 border border-[#C0392B] text-[#C0392B] text-xs tracking-widest uppercase text-center hover:bg-[#C0392B] hover:text-white transition-all duration-200"
          >
            Find Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
