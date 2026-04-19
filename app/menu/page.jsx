'use client'

import { useState } from 'react'
import { menuCategories } from '@/data/menuData'

export default function MenuPage() {
  const [active, setActive] = useState(menuCategories[0].id)
  const current = menuCategories.find((c) => c.id === active)

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Schuberg's Kitchen</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4">Our Menu</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Made fresh, served fast. Everything on this menu has earned its place over 90+ years.
        </p>
      </section>

      {/* Tabs */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-200 ${
                  active === cat.id
                    ? 'bg-[#C0392B] border-[#C0392B] text-white'
                    : 'border-stone-700 text-stone-400 hover:border-[#C0392B] hover:text-[#C0392B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between gap-6 p-5 border border-stone-800 hover:border-stone-700 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="font-playfair text-lg text-white mb-1">{item.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <p className="text-[#C0392B] font-medium text-sm flex-shrink-0">{item.price}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-600 text-xs mt-12 tracking-wide">
            Consuming raw or undercooked meats may increase your risk of foodborne illness.
          </p>
        </div>
      </section>
    </>
  )
}
