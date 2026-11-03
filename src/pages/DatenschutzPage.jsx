import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display font-bold text-gray-900 text-xl mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function GermanBody() {
  return (
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

      <Section title="5. Kontaktformular und Gratis-Video-Anfrage">
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (Name, E-Mail-Adresse, Unternehmensname, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage sowie für eventuell anschließende Rückfragen bei uns gespeichert und verarbeitet.
        </p>
        <p>
          Wenn Sie über das Formular „Gratis-Video“ ein Video anfordern, verarbeiten wir Ihre E-Mail-Adresse, um Ihnen das angeforderte Video zuzusenden und Sie gegebenenfalls im Zusammenhang mit dieser Anfrage zu kontaktieren.
        </p>
        <p>
          Zur technischen Übermittlung nutzen wir den Dienst EmailJS. Ihre Angaben werden dabei zum Zweck der Zustellung an unsere E-Mail-Adresse verarbeitet. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung durch das Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO) bzw. zur Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
        <p>
          Die auf diese Weise übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.
        </p>
      </Section>

      <Section title="6. Webanalyse (Vercel Web Analytics)">
        <p>
          Um zu verstehen, wie unsere Website genutzt wird, verwenden wir Vercel Web Analytics, einen Dienst unseres Hosting-Anbieters Vercel Inc. Dabei werden ausschließlich anonyme, zusammengefasste Statistiken erstellt: zum Beispiel welche Seiten aufgerufen werden, von welcher Website Besucher kommen (Referrer), das Land bzw. die Region, Gerätetyp, Betriebssystem und Browser sowie der Zeitpunkt des Aufrufs.
        </p>
        <p>
          Vercel Web Analytics setzt keine Cookies und speichert keine Informationen auf Ihrem Gerät. Besucher werden lediglich über einen anonymen Hashwert unterschieden, der aus der Anfrage gebildet und nach 24 Stunden automatisch verworfen wird. IP-Adressen werden nicht gespeichert, und es findet keine Zusammenführung mit Daten anderer Websites statt. Eine Identifizierung einzelner Personen ist nicht möglich.
        </p>
        <p>
          Rechtsgrundlage ist unser berechtigtes Interesse an der Analyse und Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO). Soweit dabei Daten in die USA übermittelt werden, gelten die Ausführungen unter Punkt 3.
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
  )
}

function EnglishBody() {
  return (
    <div className="space-y-10 text-gray-600 leading-relaxed">
      <p className="text-sm rounded-xl px-4 py-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        This is an English translation for your convenience. The German version of this privacy policy is the legally binding one.
      </p>

      <Section title="1. Controller">
        <p>The controller within the meaning of the General Data Protection Regulation (GDPR) is:</p>
        <p>
          Valdi Zherka, Valbrix Digital<br />
          Merowingerstraße 2, 87600 Kaufbeuren, Germany<br />
          Email: <a href="mailto:team@valbrixdigital.com" className="hover:text-gray-900 underline">team@valbrixdigital.com</a>
        </p>
        <p>
          You'll find more details in our <Link to="/impressum" className="hover:text-gray-900 underline font-semibold">legal notice (Impressum)</Link>.
        </p>
      </Section>

      <Section title="2. Your rights as a data subject">
        <p>Regarding your personal data, you have the following rights:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Right of access (Art. 15 GDPR)</li>
          <li>Right to rectification (Art. 16 GDPR)</li>
          <li>Right to erasure (Art. 17 GDPR)</li>
          <li>Right to restriction of processing (Art. 18 GDPR)</li>
          <li>Right to data portability (Art. 20 GDPR)</li>
          <li>Right to object to processing (Art. 21 GDPR)</li>
          <li>Right to withdraw consent with effect for the future (Art. 7(3) GDPR)</li>
        </ul>
        <p>You also have the right to lodge a complaint with a data protection supervisory authority about how we process your personal data. The competent authority is:</p>
        <p>
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
          Promenade 27, 91522 Ansbach, Germany
        </p>
      </Section>

      <Section title="3. Hosting and server log files">
        <p>
          This website is hosted by Vercel Inc. When you visit the website, Vercel automatically collects technical information your browser sends (so-called server log files), such as your IP address, the date and time of the request, browser type and version, and the operating system used. This data is technically necessary to deliver the website and keep it secure (Art. 6(1)(f) GDPR).
        </p>
        <p>
          Where data is transferred to the USA in the process, this is based on the European Commission's standard contractual clauses or equivalent safeguards provided by the provider.
        </p>
      </Section>

      <Section title="4. Fonts (self-hosted)">
        <p>
          The fonts used on this website (Google Fonts) are served locally from our own server. No connection to Google's servers is made, and no data is sent to Google.
        </p>
      </Section>

      <Section title="5. Contact form and free video request">
        <p>
          If you send us an inquiry through the contact form, the details you enter (name, email address, business name, message) are stored and processed by us to handle your inquiry and any follow-up questions.
        </p>
        <p>
          If you request a video through the "free video" form, we process your email address to send you the requested video and, where needed, to contact you about this request.
        </p>
        <p>
          We use the service EmailJS for the technical transmission. Your details are processed for the purpose of delivering them to our email address. The processing is based on your consent by submitting the form (Art. 6(1)(a) GDPR) or on taking steps towards a contract (Art. 6(1)(b) GDPR).
        </p>
        <p>
          The data you send us stays with us until you ask us to delete it, withdraw your consent to its storage, or the purpose for storing it no longer applies.
        </p>
      </Section>

      <Section title="6. Web analytics (Vercel Web Analytics)">
        <p>
          To understand how our website is used, we use Vercel Web Analytics, a service of our hosting provider Vercel Inc. It only produces anonymous, aggregated statistics: for example which pages are viewed, which website visitors come from (referrer), the country or region, device type, operating system and browser, and the time of the visit.
        </p>
        <p>
          Vercel Web Analytics sets no cookies and stores no information on your device. Visitors are only distinguished by an anonymous hash value generated from the request, which is automatically discarded after 24 hours. IP addresses are not stored, and data is not combined with data from other websites. Identifying individual people is not possible.
        </p>
        <p>
          The legal basis is our legitimate interest in analysing and improving our website (Art. 6(1)(f) GDPR). Where data is transferred to the USA, section 3 applies.
        </p>
      </Section>

      <Section title="7. Cookies and local storage">
        <p>
          This website uses no tracking or advertising cookies. To remember your chosen language (German/English), we use your browser's local storage (localStorage). This is technically necessary for the language switch to work and therefore does not require separate consent (§ 25(2) TDDDG). No data is sent to us or third parties in the process. The information stays on your device only.
        </p>
      </Section>

      <Section title="8. Changes to this privacy policy">
        <p>
          We reserve the right to update this privacy policy so it always meets current legal requirements or reflects changes to our services. The new privacy policy then applies to your next visit.
        </p>
      </Section>
    </div>
  )
}

export default function DatenschutzPage() {
  const { lang } = useLanguage()
  const en = lang === 'en'


  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          {en ? '← Back to home' : '← Zurück zur Startseite'}
        </Link>

        <div className="mb-12">
          <div className="section-label mb-6">{en ? 'Legal' : 'Rechtliches'}</div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            {en ? 'Privacy Policy' : 'Datenschutzerklärung'}
          </h1>
        </div>

        {en ? <EnglishBody /> : <GermanBody />}
      </div>
    </section>
  )
}
