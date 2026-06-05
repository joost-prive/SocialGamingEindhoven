import HeroSection from '@/components/HeroSection';
import CTAButton from '@/components/CTAButton';
import TestimonialCard from '@/components/TestimonialCard';
import ComparisonTable from '@/components/ComparisonTable';
import { testimonials } from '@/data/testimonials';
import { comparisonRows } from '@/data/comparisonData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Gaming Eindhoven | Groepsactiviteit voor iedereen',
  description:
    'Ontdek social gaming in Eindhoven. De leukste groepsactiviteit voor vrienden, bedrijven en verjaardagen. Geboekt via ClashRooms.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Social Gaming in Eindhoven"
        subtitle="Beleef samen het meest energieke groepsavontuur. Geen ervaring nodig, alleen samen plezier!"
        ctaLabel="Boek nu bij ClashRooms"
        ctaHref="https://www.clashrooms.nl/boeken"
      />

      {/* What is Social Gaming */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
                Wat is social gaming?
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Social gaming is veel meer dan alleen digitaal spelen. Het gaat om het samen
                beleven van competitieve, leuke en interactieve momenten. Je speelt écht
                samen, niet zomaar naast elkaar. Het gaat om de adrenaline, de lol, en vooral
                om de band die je samen opbouwt.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Bij ClashRooms in Eindhoven zijn games zo ontworpen dat iedereen kan deelnemen,
                ongeacht je gaming-ervaring. Van vrienden die samen willen ontspannen tot teams
                die elkaar echt willen testen: social gaming werkt voor iedereen.
              </p>
              <Link
                href="/wat-is-social-gaming"
                className="text-accent font-semibold hover:text-accent-dark transition-colors text-lg"
              >
                Lees meer over social gaming →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-accent to-accent-dark rounded-lg h-96 flex items-center justify-center text-white font-heading text-2xl">
              Social Gaming Experience
            </div>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Voor wie is het?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Vrienden',
                description:
                  'Zoek je iets spannends met je vrienden? Social gaming zorgt voor uren aan plezier en veel gedeelde lachmomentjes.',
              },
              {
                icon: '🏢',
                title: 'Bedrijven',
                description:
                  'Team building die écht werkt. Veel sterker dan klassieke bedrijfsuitjes. Je leert je collega\'s hier echt kennen.',
              },
              {
                icon: '🎉',
                title: 'Verjaardagen',
                description:
                  'Maak je verjaardagsfeest onvergetelijk. Perfect voor elke leeftijd. Iedereen doet mee, niemand voelt zich buitengesloten.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable
        rows={comparisonRows}
        title="Hoe social gaming zich verhoudt tot andere activiteiten"
      />

      {/* Why ClashRooms */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Waarom kiezen voor ClashRooms?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Spellen voor jullie groep',
                desc: 'Drie kamers vol uiteenlopende spellen waar je direct in zit. Samen én tegen elkaar, in dezelfde ruimte, onder leiding van een enthousiaste GameMaster.',
              },
              {
                title: 'Geen ervaring nodig',
                desc: 'Of je nou superfanaat bent of geen idee hebt wat je kunt verwachten: iedereen pakt het meteen op. Geen ingewikkelde regels, gewoon meedoen en lol hebben.',
              },
              {
                title: 'Hartje Eindhoven',
                desc: 'Vlakbij Centraal Station, parkeren op loopafstand en restaurants om de hoek. Voor of achteraf zo door naar het terras of een diner.',
              },
              {
                title: 'Voor ieder gezelschap',
                desc: 'Jong of oud, Nederlands of Engels, met of zonder fysieke beperking. Iedereen kan meedoen, en we stemmen de beleving af op jullie groep.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-black font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Wat zeggen onze bezoekers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                name={testimonial.name}
                context={testimonial.context}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About This Website */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-max max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-black mb-6">
            Over deze website
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Deze website is een initiatief van ClashRooms, de social gaming locatie in
            Eindhoven. We geloven dat social gaming een van de leukste en meest betekenisvolle
            manieren is om samen iets te beleven, en we willen zoveel mogelijk mensen in
            Eindhoven laten kennismaken met dit concept.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Op deze site vind je alles wat je moet weten over social gaming, waarom het zo
            leuk is, en hoe je het zelf kunt ervaren bij ClashRooms. We zijn transparant: deze
            site is van ons, en we zijn trots op wat we bieden.
          </p>
          <a
            href="https://clashrooms.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:text-accent-dark transition-colors text-lg"
          >
            Bezoek ClashRooms.nl →
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-gradient-to-r from-black to-gray-800 text-white text-center">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Klaar voor het plezier?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Boek nu je moment bij ClashRooms en beleef samen wat social gaming echt is.
          </p>
          <CTAButton
            href="https://www.clashrooms.nl/boeken"
            label="Boek je plek nu"
            variant="primary"
          />
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'ClashRooms',
            url: 'https://clashrooms.nl',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Eindhoven',
              addressCountry: 'NL',
            },
            description: 'Social gaming locatie in Eindhoven',
          }),
        }}
      />
    </>
  );
}
