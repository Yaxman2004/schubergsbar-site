'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm]     = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace YOUR_FORM_ID below with your actual Formspree form ID
      // Sign up free at formspree.io, create a form, copy the ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Come See Us</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4">Find Us</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Right in the heart of Big Rapids, where we've been since 1933.
        </p>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <div className="mb-10">
              <h2 className="font-playfair text-2xl text-white mb-4">Location</h2>
              <p className="text-stone-400 text-sm mb-1">109 North Michigan Avenue</p>
              <p className="text-stone-400 text-sm mb-6">Big Rapids, MI 49307</p>
              <div className="h-56 bg-stone-800 overflow-hidden">
                <iframe
                  title="Schuberg's location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.5!2d-85.4833!3d43.6981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881d4a8e2a5e2345%3A0x1234567890abcdef!2sSchuberg's%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-playfair text-2xl text-white mb-4">Hours</h2>
              <ul className="flex flex-col gap-3 text-sm text-stone-400">
                <li className="flex gap-8 border-b border-stone-800 pb-3">
                  <span className="w-28">Mon – Fri</span><span>11am – 2am</span>
                </li>
                <li className="flex gap-8 border-b border-stone-800 pb-3">
                  <span className="w-28">Saturday</span><span>11am – 2am</span>
                </li>
                <li className="flex gap-8">
                  <span className="w-28">Sunday</span><span>12pm – 2am</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-white mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/schubergsbar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-stone-700 text-stone-400 text-xs tracking-widest uppercase hover:border-[#C0392B] hover:text-[#C0392B] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/schubergsbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-stone-700 text-stone-400 text-xs tracking-widest uppercase hover:border-[#C0392B] hover:text-[#C0392B] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-playfair text-2xl text-white mb-6">Send a Message</h2>

            {status === 'success' ? (
              <div className="p-6 border border-green-800 bg-green-950/40 text-green-400 text-sm">
                Message sent! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors resize-none"
                    placeholder="Questions, feedback, private events..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-4 bg-[#C0392B] text-white text-sm tracking-widest uppercase hover:bg-[#96281B] transition-colors duration-200 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
