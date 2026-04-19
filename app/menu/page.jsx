'use client'

import { useState, useEffect } from 'react'
import { menuCategories } from '@/data/menuData'

export default function MenuPage() {
  const [active, setActive]   = useState(menuCategories[0].id)
  const [modal, setModal]     = useState(null)

  const current = menuCategories.find((c) => c.id === active)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModal(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Schuberg's Kitchen</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4">Our Menu</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Made fresh, served fast. Click any item to see the dish.
        </p>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.items.map((item) => (
              <button
                key={item.name}
                onClick={() => item.image && setModal(item)}
                className={`flex justify-between gap-6 p-5 border text-left w-full transition-all duration-200 group ${
                  item.image
                    ? 'border-stone-800 hover:border-[#C0392B] cursor-pointer'
                    : 'border-stone-800 cursor-default'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-playfair text-lg text-white">{item.name}</h3>
                    {item.image && (
                      <span className="text-[10px] tracking-widest uppercase text-stone-600 group-hover:text-[#C0392B] transition-colors">
                        view photo
                      </span>
                    )}
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <p className="text-[#C0392B] font-medium text-sm flex-shrink-0">{item.price}</p>
              </button>
            ))}
          </div>

          <p className="text-center text-stone-600 text-xs mt-12 tracking-wide">
            Consuming raw or undercooked meats may increase your risk of foodborne illness.
          </p>
        </div>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-[#1a1008] border border-stone-700 max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-72 bg-stone-800 bg-cover bg-center"
              style={{ backgroundImage: `url('${modal.image}')` }}
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-playfair text-2xl text-white">{modal.name}</h2>
                <span className="text-[#C0392B] font-medium text-lg ml-4 flex-shrink-0">{modal.price}</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">{modal.description}</p>
            </div>
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 text-stone-400 hover:text-white transition-colors text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <p className="absolute bottom-6 text-stone-600 text-xs tracking-widest uppercase">
            Click outside or press Esc to close
          </p>
        </div>
      )}
    </>
  )
}