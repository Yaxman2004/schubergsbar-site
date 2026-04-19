export const metadata = {
  title: "Gallery | Schuberg's Bar & Grill",
  description: "Photos from Schuberg's Bar & Grill — Big Rapids, MI.",
}

// Add your real image filenames here in /public/images/
const foodPhotos = [
  { src: '/images/bacon-cheddar-schu.jpg',  alt: 'Bacon Cheddar Schu Burger' },
  { src: '/images/brew-burger.jpg',          alt: 'Brew Burger on pretzel bun' },
  { src: '/images/chili.jpg',                alt: "Schuberg's homemade chili" },
  { src: '/images/egg-cellent.jpg',          alt: 'The Egg-Cellent Schu burger' },
  { src: '/images/super-yooper.jpg',         alt: 'The Super Yooper burger' },
  { src: '/images/tipsy-dip.jpg',            alt: 'Tipsy Dip sandwich' },
  { src: '/images/loaded-tots.jpg',          alt: 'Loaded tater tots' },
  { src: '/images/house-salad.jpg',          alt: 'House salad' },
  { src: '/images/sweet-potato-fries.jpg',   alt: 'Sweet potato fries' },
]

const atmospherePhotos = [
  { src: '/images/bar-interior.jpg',   alt: 'Inside Schuberg\'s Bar & Grill' },
  { src: '/images/bar-exterior.jpg',   alt: 'Outside Schuberg\'s' },
  { src: '/images/vintage-crowd.jpg',  alt: 'Vintage photo of Schuberg\'s' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">The Food. The Place.</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4">Gallery</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          A look inside Big Rapids' favorite burger bar.
        </p>
      </section>

      {/* Food photos */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">The Food</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {foodPhotos.map((photo, i) => (
              <div
                key={i}
                className={`bg-stone-800 bg-cover bg-center overflow-hidden ${
                  i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
                style={{ backgroundImage: `url('${photo.src}')` }}
                title={photo.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere photos */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">The Place</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {atmospherePhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-stone-800 bg-cover bg-center"
                style={{ backgroundImage: `url('${photo.src}')` }}
                title={photo.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <p className="text-center text-stone-700 text-xs pb-12 tracking-wide px-6">
        Add your real images to /public/images/ and update the filenames in app/gallery/page.jsx
      </p>
    </>
  )
}
