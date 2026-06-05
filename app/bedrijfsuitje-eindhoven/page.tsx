import HeroSection from '@/components/HeroSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTAButton from '@/components/CTAButton';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bedrijfsuitje Eindhoven | Team Building met Social Gaming',
  description:
    'Zoeken naar een bedrijfsuitje in Eindhoven? Social gaming bij ClashRooms is het ultieme team building format. Échte samenwerking, échte lol.',
};

export default function BedrijfsuitjeEindhoven() {
  const faqItems = [
    {
      question: 'Waarom is social gaming beter voor team building dan andere activiteiten?',
      answer:
        'Omdat het real-time samenwerking en communicatie vereist. Bij andere activiteiten kunnen collega\'s veel stilstaan en wachten. Hier speelt iedereen écht mee. Je ziet hoe collega\'s samenwerken onder druk, wie leidt, wie ondersteunt. Dat is echte teamkennis.',
    },
    {
      question: 'Hoe groot kan onze groep zijn?',
      answer:
        'Van 4 tot 20+ personen is geen probleem. Voor grotere teams kunnen we je helpen met meerdere sessies tegelijk, zodat iedereen aan bod komt.',
    },
    {
      question: 'Is dit geschikt voor ons bedrijf?',
      answer:
        'Waarschijnlijk wel! We zien bedrijven uit tech, marketing, finance, HR en sales: overal waar teamwork belangrijk is. Zolang je team kan en wil spelen, werkt het.',
    },
    {
      question: 'Hoe organiseren we dit praktisch?',
      answer:
        'Je geeft je groepsgrootte en voorkeursdatum door via clashrooms.nl/boeken. Wij zorgen voor de rest. Je betaalt per persoon, het is duidelijk en geen gedoe.',
    },
    {
      question: 'Kunnen we dit ook als remote team doen?',
      answer:
        'Social gaming werkt het best fysiek samen (je speelt echt samen in dezelfde ruimte). Voor remote teams is het minder geschikt, omdat je op dezelfde plek moet zijn. Voor teams die regelmatig bij elkaar komen is het perfect.',
    },
    {
      question: 'Kan dit ook later op de avond, na het werk?',
      answer:
        'Absoluut! Veel bedrijven boeken net na werktijd. Je bent om 17:00 klaar met werk en om 17:30 al aan het spelen. Super handig!',
    },
  ];

  // Selecteer reviews die het beste passen bij teams / bedrijfsuitjes
  const teamBuildingTestimonials = [
    testimonials[2], // Marlene: "Superleuke bedrijfsactiviteit"
    testimonials[4], // Vera: "Super leuk teamuitje"
    testimonials[0], // Maikel: "Diversiteit aan spelvormen"
  ];

  return (
    <>
      <HeroSection
        title="Bedrijfsuitje Eindhoven"
        subtitle="Team building dat échte samenwerking bouwt, niet alleen een dag uit."
        alignment="left"
      />

      {/* Why social gaming for company outings */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-8">
            Waarom social gaming het beste team building is
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Bedrijfsuitjes zijn soms saai. Je gaat bowlen en iedereen staat veel te wachten.
                Je gaat naar een escape room, maar alleen de slimme mensen voelen zich nuttig.
                Of je gaat naar een teambuilding-coach die je in vreemde vertrouwensoefeningen
                zet.
              </p>
              <p>
                Social gaming is anders. Iedereen is meteen bezig, iedereen speelt echt mee, en
                je leert je collega&apos;s kénnen. Hoe reageert je teamlead onder druk? Wie helpt
                wie? Wie motiveert? Wie blijft rustig? Dat gebeurt allemaal vanzelf.
              </p>
              <p>
                En vooral: het voelt niet als "teambuilding". Het voelt als plezier. Je bent op
                je gemak zonder dat je gedwongen wordt veel over jezelf te praten.
              </p>
            </div>
            <img
              src="/img/socialgame2.png"
              alt="Twee teams spelen tegen elkaar in een blokkenstapel-spel met scorebord bij ClashRooms"
              className="w-full h-96 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12">
            Wat je als team krijgt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Echte samenwerking',
                desc: 'Games vereisen real-time communicatie en teamwork. Je ziet hoe je collega\'s samenwerken, en dat is puur.',
              },
              {
                title: 'Energieverhoging',
                desc: 'Geen slaapverwekkend middagje. Dit is energiek, met adrenaline, gelach en spanning. Iedereen doet mee.',
              },
              {
                title: 'Veilige competitie',
                desc: 'Competitie zonder gevolgen. Je wint of je verliest, maar het is gewoon een spel. Lekker competitief gevoel.',
              },
              {
                title: 'Ontspanning',
                desc: 'Niet iedereen hoeft veel te praten of zich bloot te geven. Je speelt, je werkt samen, je ontspant. Simpel.',
              },
              {
                title: 'Inclusief',
                desc: 'Of je nou gamer bent of niet, iedereen speelt mee. Geen buitenstaanders. Iedereen is even waardevol in het spel.',
              },
              {
                title: 'Betaalbaar',
                desc: 'Per persoon, duidelijke prijs, goed voor je geld. Een stuk goedkoper dan veel andere teambuilding.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Wat zeggen bedrijven?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamBuildingTestimonials.map((testimonial, idx) => (
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

      {/* Boeken zonder gedoe */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
            Boeken zonder gedoe
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Een bedrijfsuitje organiseren is normaal een rotklus. Datums afstemmen, offertes
            vergelijken, mensen achter de broek aanzitten. Bij ClashRooms ben je binnen een paar
            minuten klaar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Kies datum en groepsgrootte',
                desc: 'Op clashrooms.nl/boeken zie je meteen wat er kan. Een paar klikken en het tijdslot staat vast.',
              },
              {
                step: '2',
                title: 'Eten en drinken erbij',
                desc: 'Vink een drank-arrangement aan, of combineer ClashRooms met een hapje eten in hetzelfde pand of de binnenstad.',
              },
              {
                step: '3',
                title: 'Bevestiging in je inbox',
                desc: 'Geen offerte-pingpong, geen wekenlange mailwisseling. Direct geregeld, jij kunt door met je werk.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-black font-bold text-lg rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={faqItems} title="Veelgestelde vragen voor bedrijven" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Maak je bedrijfsuitje onvergetelijk
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Social gaming bij ClashRooms is team building dat werkt. Echt samenspel, echte
            energie, echte herinneringen.
          </p>
          <CTAButton
            href="https://www.clashrooms.nl/boeken"
            label="Boek je bedrijfsuitje nu"
            variant="primary"
          />
        </div>
      </section>
    </>
  );
}
