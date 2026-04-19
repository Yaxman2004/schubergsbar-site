import Link from 'next/link'

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/menu',    label: 'Menu' },
  { href: '/history', label: 'History' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0603] border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl text-[#C0392B] mb-1">Schuberg's</h3>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Bar & Grill · Est. 1933</p>
            <p className="text-stone-400 text-sm leading-relaxed">
              Big Rapids' legendary burger bar. Over 90 years of great food,
              cold drinks, and community spirit. Proudly the Official Burger
              of Ferris State Athletics.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-400 text-sm hover:text-[#C0392B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-5">Find Us</h4>
            <ul className="flex flex-col gap-2 text-stone-400 text-sm mb-6">
              <li>109 North Michigan Avenue</li>
              <li>Big Rapids, MI 49307</li>
              <li className="pt-1">
                <a href="https://www.facebook.com/schubergsbar" target="_blank" rel="noopener noreferrer"
                   className="hover:text-[#C0392B] transition-colors">
                  Facebook
                </a>
                {' · '}
                <a href="https://www.instagram.com/schubergsbar/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-[#C0392B] transition-colors">
                  Instagram
                </a>
              </li>
            </ul>

            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">Hours</h4>
            <ul className="flex flex-col gap-1 text-stone-400 text-sm">
              <li className="flex justify-between gap-8"><span>Mon – Fri</span><span>11am – 2am</span></li>
              <li className="flex justify-between gap-8"><span>Saturday</span><span>11am – 2am</span></li>
              <li className="flex justify-between gap-8"><span>Sunday</span><span>12pm – 2am</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs">© {new Date().getFullYear()} Schuberg's Bar & Grill. All rights reserved.</p>
          <p className="text-stone-700 text-xs">
            Redesigned by{' '}
            <a href="#" className="text-stone-500 hover:text-[#C0392B] transition-colors">your name here</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
