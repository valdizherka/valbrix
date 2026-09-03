import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display font-bold text-gray-900 text-xl mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

export default function DatenschutzPage() {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | Valbrix Digital'
  }, [])

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← Zurück zur Startseite
        </Link>

        <div className="mb-12">
          <div className="section-label mb-6">Rechtliches</div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Valdi Zherka, Valbrix Digital<br />
              Merowingerstraße 2, 87600 Kaufbeuren, Deutschland<br />
              E-Mail: <a href="mailto:team@valbrixdigital.com" className="hover:text-gray-900 underline">team@valbrixdigital.com</a>
            </p>
            <p>
              Weitere Angaben finden Sie in unserem <Link to="/impressum" className="hover:text-gray-900 underline font-semibold">Impressum</Link>.
            </p>
          </Section>

          <Section title="2. Ihre Rechte als betroffene Person">
            <p>Ihnen stehen bezüglich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständig ist:
            </p>
            <p>
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 27, 91522 Ansbach
            </p>
          </Section>

          <Section title="3. Hosting und Server-Logfiles">
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website erhebt Vercel automatisch technische Informationen (sogenannte Server-Logfiles), die Ihr Browser übermittelt, z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version sowie das verwendete Betriebssystem. Diese Daten sind technisch erforderlich, um die Website auszuliefern und die Betriebssicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Soweit dabei Daten in die USA übermittelt werden, stützt sich dies auf die Standardvertragsklauseln der EU-Kommission bzw. entsprechende Garantien des Anbieters.
            </p>
          </Section>

          <Section title="4. Schriftarten (selbst gehostet)">
            <p>
              Die auf dieser Website verwendeten Schriftarten (Google Fonts) werden lokal von unserem eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google statt, und es werden dabei keine Daten an Google übertragen.
            </p>
          </Section>

          <Section title="5. Google Maps">
            <p>
              Auf einzelnen Seiten binden wir eine Karte des Kartendienstes Google Maps ein, betrieben von Google Ireland Limited (bzw. Google LLC in den USA). Die Karte wird nicht automatisch beim Seitenaufruf geladen, sondern erst, wenn Sie aktiv auf den Button "Google Maps laden" klicken.
            </p>
            <p>
              Erst mit diesem Klick wird eine Verbindung zu Servern von Google hergestellt und Ihre IP-Adresse sowie ggf. weitere Daten an Google übermittelt (Art. 6 Abs. 1 lit. a DSGVO, Einwilligung). Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline">Datenschutzerklärung von Google</a>.
            </p>
          </Section>

          <Section title="6. Kontaktformular">
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (Name, E-Mail-Adresse, Unternehmensname, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage sowie für eventuell anschließende Rückfragen bei uns gespeichert und verarbeitet.
            </p>
            <p>
              Zur technischen Übermittlung nutzen wir den Dienst EmailJS. Ihre Angaben werden dabei zum Zweck der Zustellung an unsere E-Mail-Adresse verarbeitet. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung durch das Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO) bzw. zur Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
            <p>
              Die auf diese Weise übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.
            </p>
          </Section>

          <Section title="7. Cookies und lokale Speicherung">
            <p>
              Diese Website verwendet keine Tracking- oder Werbe-Cookies. Zur Speicherung Ihrer gewählten Sprache (Deutsch/Englisch) nutzen wir den lokalen Speicher Ihres Browsers (localStorage). Diese Speicherung ist technisch notwendig für die Funktion der Sprachumschaltung und bedarf daher keiner gesonderten Einwilligung (§ 25 Abs. 2 TDDDG). Es werden dabei keine Daten an uns oder Dritte übertragen - die Information verbleibt ausschließlich auf Ihrem Gerät.
            </p>
          </Section>

          <Section title="8. Änderung dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </Section>
        </div>
      </div>
    </section>
  )
}
