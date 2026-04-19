import Link from 'next/link'

export const metadata = {
  title: "Schuberg's Bar & Grill | Est. 1933 | Big Rapids, MI",
  description: "Big Rapids' legendary burger bar since 1933. Proudly the Official Burger of Ferris State Athletics.",
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image — replace src with your actual hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0a04]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[#C0392B] mb-6">
            Big Rapids, Michigan
          </p>
          <h1 className="font-playfair text-6xl md:text-8xl text-white mb-4 leading-tight">
            Schuberg's
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-stone-300 italic mb-2">
            Bar & Grill
          </p>
          <p className="text-sm tracking-[0.4em] uppercase text-stone-300 mb-10 font-medium" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            Est. 1933
          </p>
          <p className="text-lg md:text-2xl text-stone-200 font-light mb-12 tracking-wide">
            Burgers, it's what we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-4 bg-[#C0392B] text-white text-sm tracking-widest uppercase hover:bg-[#96281B] transition-colors duration-200"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-stone-400 text-stone-300 text-sm tracking-widest uppercase hover:border-white hover:text-white transition-colors duration-200"
            >
              Find Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-0.5 h-8 bg-stone-600" />
        </div>
      </section>

      {/* ── FERRIS STATE BADGE ── */}
      <section className="bg-[#0a0603] border-y border-stone-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.4em] uppercase text-stone-400">
            Proudly the{' '}
            <span className="text-[#C0392B] font-medium">Official Burger</span>
            {' '}of Ferris State Athletics
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="font-playfair text-5xl text-[#C0392B] mb-3">90+</p>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Years Serving Big Rapids</p>
            <p className="text-stone-500 text-sm leading-relaxed">
              Open since 1933, we've been a cornerstone of this community for generations.
            </p>
          </div>
          <div>
            <p className="font-playfair text-5xl text-[#C0392B] mb-3">109</p>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">N. Michigan Avenue</p>
            <p className="text-stone-500 text-sm leading-relaxed">
              Same address for over nine decades. Right in the heart of Big Rapids.
            </p>
          </div>
          <div>
            <p className="font-playfair text-5xl text-[#C0392B] mb-3">#1</p>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Burger in Big Rapids</p>
            <p className="text-stone-500 text-sm leading-relaxed">
              Ask any Ferris State student — past or present — where to eat. They'll tell you.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED BURGERS ── */}
      <section className="py-24 bg-[#0a0603]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">From the Kitchen</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">Fan Favorites</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'The Classic Schu',
                description: '1/3 lb beef patty, lettuce, tomato, onion, pickles, house sauce on a toasted bun.',
                price: '$9.99',
                image: '/images/classic-schu.jpg',
              },
              {
                name: 'Brew Burger',
                description: 'House-made beer cheese, caramelized onions, pretzel bun. A Big Rapids staple.',
                price: '$12.99',
                image: '/images/brew-burger.jpg',
              },
              {
                name: 'The Super Yooper',
                description: 'Double patty, double cheese, bacon, fried egg, house sauce on a pretzel bun.',
                price: '$14.99',
                image: '/images/super-yooper.jpg',
              },
            ].map((item) => (
              <div key={item.name} className="group">
                {/* Image placeholder — replace with next/image when you have photos */}
                <div
                  className="w-full h-56 bg-stone-800 bg-cover bg-center mb-5 overflow-hidden"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="w-full h-full bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-xl text-white">{item.name}</h3>
                  <span className="text-[#C0392B] font-medium text-sm ml-4 flex-shrink-0">{item.price}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/menu"
              className="px-8 py-4 border border-[#C0392B] text-[#C0392B] text-sm tracking-widest uppercase hover:bg-[#C0392B] hover:text-white transition-all duration-200"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── HISTORY CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-4">Since 1933</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            More Than a Bar & Grill
          </h2>
          <p className="text-stone-400 leading-relaxed mb-10 text-lg">
            For over 90 years, Schuberg's has been where Big Rapids comes together —
            for game days, graduations, first dates, and everything in between.
            There's a reason generations of Ferris State students call this place home.
          </p>
          <Link
            href="/history"
            className="px-8 py-4 bg-[#C0392B] text-white text-sm tracking-widest uppercase hover:bg-[#96281B] transition-colors duration-200"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── HOURS & LOCATION ── */}
      <section className="py-16 bg-[#0a0603] border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Come Visit</p>
              <h2 className="font-playfair text-3xl text-white mb-6">Hours & Location</h2>
              <p className="text-stone-400 text-sm mb-2">109 North Michigan Avenue</p>
              <p className="text-stone-400 text-sm mb-8">Big Rapids, MI 49307</p>
              <ul className="flex flex-col gap-3 text-sm text-stone-400">
                <li className="flex gap-8"><span className="w-28">Mon – Fri</span><span>11am – 2am</span></li>
                <li className="flex gap-8"><span className="w-28">Saturday</span><span>11am – 2am</span></li>
                <li className="flex gap-8"><span className="w-28">Sunday</span><span>12pm – 2am</span></li>
              </ul>
            </div>
            <div className="h-64 bg-stone-800 rounded overflow-hidden">
              <iframe
                title="Schuberg's location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.123456789!2d-85.483!3d43.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQxJzUyLjgiTiA4NcKwMjgnNTguOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}