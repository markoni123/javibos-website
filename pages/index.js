
import React from 'react';

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <img src="/logo-png.png" alt="JAVIBOS Logo" className="mx-auto h-28 mb-6" />
        <h1 className="text-5xl font-extrabold tracking-tight">JAVIBOS GmbH</h1>
        <p className="text-xl mt-4">WIR VERLEIHEN IHREM REICH FRISCHEN GLANZ!</p>
        <button className="mt-6 px-8 py-4 text-lg rounded-2xl shadow-xl bg-white text-blue-900 font-semibold hover:bg-gray-100 transition">Jetzt Kontakt aufnehmen</button>
      </section>

      {/* Leistungen Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            JAVIBOS bietet professionelle Dienstleistungen in den Bereichen Reinigung, Schneeräumung und Gartenpflege für private und gewerbliche Kunden.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Gebäudereinigung</h3>
            <p>Büro-, Fenster-, Grund- und Bauendreinigung – zuverlässig und gründlich.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Schneeräumung</h3>
            <p>Effizienter Winterdienst für Privat und Gewerbe – pünktlich & professionell.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Gartenpflege</h3>
            <p>Rasenpflege, Heckenschnitt, Unkrautentfernung – Ihr Garten in besten Händen.</p>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Über uns</h2>
          <p className="text-lg text-gray-700">
            JAVIBOS GmbH steht für Qualität, Verlässlichkeit und kundenorientierte Dienstleistungen. Unser erfahrenes Team arbeitet mit modernen Geräten und umweltfreundlichen Produkten, um Ihnen den besten Service zu bieten.
          </p>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="px-6 py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Kontakt</h2>
          <p className="text-lg text-gray-700 mb-6">
            📧 <a href="mailto:office@javi.at" className="text-blue-700 font-semibold">office@javi.at</a>
          </p>
          <form className="space-y-4 text-left">
            <input type="text" placeholder="Ihr Name" className="w-full p-3 border border-gray-300 rounded-xl" />
            <input type="email" placeholder="Ihre E-Mail" className="w-full p-3 border border-gray-300 rounded-xl" />
            <textarea placeholder="Ihre Nachricht" className="w-full p-3 border border-gray-300 rounded-xl h-32"></textarea>
            <button type="submit" className="w-full text-lg py-4 rounded-2xl bg-blue-800 text-white font-semibold hover:bg-blue-900 transition">Nachricht senden</button>
          </form>
        </div>
      </section>

      {/* Impressum Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Impressum</h2>
          <p className="text-gray-700">
            <strong>JAVIBOS GmbH</strong><br />
            Musterstraße 1<br />
            1010 Wien, Österreich<br />
            Telefon: +43 660 0000000<br />
            E-Mail: <a href="mailto:office@javi.at" className="text-blue-700">office@javi.at</a><br /><br />
            Firmenbuchnummer: FN 123456a<br />
            Firmenbuchgericht: Handelsgericht Wien<br />
            UID-Nummer: ATU12345678<br />
            Geschäftsführung: Max Mustermann
          </p>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p className="text-sm">© 2025 JAVIBOS GmbH – Alle Rechte vorbehalten</p>
      </footer>
    </main>
  );
}
