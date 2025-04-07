
export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', color: '#1a202c' }}>
      <section style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)', color: 'white', padding: '5rem 1rem', textAlign: 'center' }}>
        <img src="/logo-png.png" alt="JAVIBOS Logo" style={{ height: '7rem', margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>JAVIBOS GmbH</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>WIR VERLEIHEN IHREM REICH FRISCHEN GLANZ!</p>
      </section>

      <section style={{ padding: '5rem 1rem', backgroundColor: '#f7fafc', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Unsere Leistungen</h2>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Gebäudereinigung</h3>
            <p>Büro-, Fenster-, Grund- und Bauendreinigung – zuverlässig und gründlich.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Schneeräumung</h3>
            <p>Effizienter Winterdienst für Privat und Gewerbe – pünktlich & professionell.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Gartenpflege</h3>
            <p>Rasenpflege, Heckenschnitt, Unkrautentfernung – Ihr Garten in besten Händen.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Über uns</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          JAVIBOS GmbH steht für Qualität, Verlässlichkeit und kundenorientierte Dienstleistungen. Unser erfahrenes Team arbeitet mit modernen Geräten und umweltfreundlichen Produkten, um Ihnen den besten Service zu bieten.
        </p>
      </section>

      <section style={{ padding: '5rem 1rem', backgroundColor: '#edf2f7', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Kontakt</h2>
        <p style={{ fontSize: '1.1rem' }}>
          📧 <a href="mailto:office@javi.at" style={{ color: '#2b6cb0' }}>office@javi.at</a>
        </p>
      </section>

      <section style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Impressum</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
          <strong>JAVIBOS GmbH</strong><br/>
          Musterstraße 1<br/>
          1010 Wien, Österreich<br/>
          Telefon: +43 660 0000000<br/>
          E-Mail: <a href="mailto:office@javi.at">office@javi.at</a><br/><br/>
          Firmenbuchnummer: FN 123456a<br/>
          Firmenbuchgericht: Handelsgericht Wien<br/>
          UID-Nummer: ATU12345678<br/>
          Geschäftsführung: Max Mustermann
        </p>
      </section>

      <footer style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '2rem 1rem', textAlign: 'center' }}>
        <p>© 2025 JAVIBOS GmbH – Alle Rechte vorbehalten</p>
      </footer>
    </main>
  );
}
