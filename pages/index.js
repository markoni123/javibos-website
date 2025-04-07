
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
    <main className="font-sans bg-white text-gray-900 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
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
      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p className="text-sm">© 2025 JAVIBOS GmbH – Alle Rechte vorbehalten</p>
      </footer>
    </main>
  );
}
