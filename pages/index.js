
import Image from "next/image";
import { useEffect, useState } from "react";

export default function JAVIBOS() {
  const testimonials = [
    {
      name: "Anna M.",
      text: "Seit JAVIBOS unsere Büros reinigt, glänzt einfach alles. Super Service!"
    },
    {
      name: "Thomas K.",
      text: "Zuverlässiger Winterdienst – pünktlich und ordentlich. Top Firma!"
    },
    {
      name: "Sabine R.",
      text: "Unser Garten war noch nie so gepflegt. Danke an das nette Team!"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <img src="/logo-png.png" alt="JAVIBOS Logo" className="h-10" />
            <span className="text-xl font-bold text-blue-800">JAVIBOS GmbH</span>
          </div>
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#leistungen" className="hover:text-blue-700">Leistungen</a></li>
            <li><a href="#ueberuns" className="hover:text-blue-700">Über uns</a></li>
            <li><a href="#kontakt" className="hover:text-blue-700">Kontakt</a></li>
            <li><a href="#impressum" className="hover:text-blue-700">Impressum</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-6 text-center animate-fade-in">
        <img src="/logo-png.png" alt="JAVIBOS Logo" className="mx-auto h-28 mb-6 animate-fade-in" />
        <h1 className="text-5xl font-extrabold tracking-tight">JAVIBOS GmbH</h1>
        <p className="text-xl mt-4">WIR VERLEIHEN IHREM REICH FRISCHEN GLANZ!</p>
        <button className="mt-6 px-8 py-4 text-lg rounded-2xl shadow-xl bg-white text-blue-900 font-semibold hover:bg-gray-100 transition transform hover:scale-105">Jetzt Kontakt aufnehmen</button>
      </section>

      {/* Leistungen Section */}
      <section id="leistungen" className="px-6 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            JAVIBOS bietet professionelle Dienstleistungen in den Bereichen Reinigung, Schneeräumung und Gartenpflege für private und gewerbliche Kunden.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              src: "https://source.unsplash.com/400x250/?cleaning",
              alt: "Gebäudereinigung",
              title: "Gebäudereinigung",
              text: "Büro-, Fenster-, Grund- und Bauendreinigung – zuverlässig und gründlich."
            },
            {
              src: "https://source.unsplash.com/400x250/?snow-removal",
              alt: "Schneeräumung",
              title: "Schneeräumung",
              text: "Effizienter Winterdienst für Privat und Gewerbe – pünktlich & professionell."
            },
            {
              src: "https://source.unsplash.com/400x250/?gardening",
              alt: "Gartenpflege",
              title: "Gartenpflege",
              text: "Rasenpflege, Heckenschnitt, Unkrautentfernung – Ihr Garten in besten Händen."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={service.src}
                alt={service.alt}
                className="rounded-xl mb-4 mx-auto w-full h-40 object-cover transition duration-300 hover:brightness-90"
              />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kundenmeinungen Slider */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Kunden sagen</h2>
        <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md transition duration-300 animate-fade-in">
          <p className="text-lg italic text-gray-700">„{testimonials[currentTestimonial].text}“</p>
          <p className="mt-4 font-semibold text-blue-800">– {testimonials[currentTestimonial].name}</p>
        </div>
      </section>

      {/* Über uns Section */}
      <section id="ueberuns" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Über uns</h2>
          <p className="text-lg text-gray-700">
            JAVIBOS GmbH steht für Qualität, Verlässlichkeit und kundenorientierte Dienstleistungen. Unser erfahrenes Team arbeitet mit modernen Geräten und umweltfreundlichen Produkten, um Ihnen den besten Service zu bieten.
          </p>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="px-6 py-20 bg-gray-100">
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
      <section id="impressum" className="px-6 py-20 bg-white">
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

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p className="text-sm">© 2025 JAVIBOS GmbH – Alle Rechte vorbehalten</p>
      </footer>
    </main>
  );
}
