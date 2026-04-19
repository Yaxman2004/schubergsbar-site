import { timeline } from '@/data/historyData'

export const metadata = {
  title: "Our History | Schuberg's Bar & Grill",
  description: "The story of Big Rapids' legendary burger bar — open since 1933.",
}

export default function HistoryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Est. 1933</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4">Our Story</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Over 90 years of burgers, community, and tradition in the heart of Big Rapids.
        </p>
      </section>

      {/* Intro */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="w-full h-72 md:h-96 bg-stone-800 bg-cover bg-center mb-12"
            style={{ backgroundImage: "url('/images/history-hero.jpg')" }}
          />
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            When Schuberg's opened its doors in 1933, Big Rapids was a different place —
            but some things never change. The need for good food, cold drinks, and a place
            to belong has kept people walking through this door for over nine decades.
          </p>
          <p className="text-stone-400 leading-relaxed">
            From the regulars who've been coming since the 1950s to the Ferris State freshmen
            discovering it for the first time, Schuberg's has always been more than a bar and grill.
            It's a piece of this town's identity.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-[#0a0603] border-t border-stone-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-white">Timeline</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-stone-800" />

            <div className="flex flex-col gap-12">
              {timeline.map((event, i) => (
                <div key={i} className="flex gap-8">
                  {/* Year */}
                  <div className="w-[60px] flex-shrink-0 text-right">
                    <span className="font-playfair text-[#C0392B] text-sm font-medium">{event.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-4 flex items-start justify-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-[#C0392B] border-2 border-[#0a0603] ring-1 ring-[#C0392B]" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="font-playfair text-xl text-white mb-2">{event.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vintage photos section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Through the Years</p>
            <h2 className="font-playfair text-4xl text-white">From the Archives</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['vintage-1.jpg','vintage-2.jpg','vintage-3.jpg','vintage-4.jpg','vintage-5.jpg','vintage-6.jpg'].map((img) => (
              <div
                key={img}
                className="aspect-square bg-stone-800 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/${img}')` }}
              />
            ))}
          </div>
          <p className="text-center text-stone-600 text-xs mt-6 tracking-wide">
            Replace these with Schuberg's actual vintage photos from their existing site.
          </p>
        </div>
      </section>
    </>
  )
}
