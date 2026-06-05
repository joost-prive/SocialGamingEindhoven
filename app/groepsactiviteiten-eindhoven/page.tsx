import HeroSection from '@/components/HeroSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Groepsactiviteiten Eindhoven | Social Gaming is het beste',
  description:
    'Zoeken naar groepsactiviteiten in Eindhoven? Ontdek waarom social gaming de meest leuke en toegankelijke optie is.',
};

export default function GroepsactiviteitenEindhoven() {
  const faqItems = [
    {
      question: 'Hoe lang duurt een sessie social gaming?',
      answer:
        'Meestal 1 tot 2 uur, afhankelijk van wat je boekt. Ideaal voor een avond of middag. Snel klaar met werk, veel plezier, en daarna thuis voor het eten of door naar de volgende plek.',
    },
    {
      question: 'Hoeveel mensen kan ik reserveren?',
      answer:
        'Bij ClashRooms kunnen groepen van 2 tot 20+ personen terecht. Of je nu met 3 vrienden bent of 15 collega\'s: het werkt.',
    },
    {
      question: 'Wat als er mensen in onze groep niet gamen?',
      answer:
        'Geen probleem. Social gaming is speciaal ontworpen voor gemengde groepen. Gamers spelen voluit, niet-gamers voelen zich meteen welkom en kunnen direct meespelen.',
    },
    {
      question: 'Wat zijn de kosten?',
      answer:
        'Dat hangt af van je groepsgrootte en hoelang je speelt. Qua prijs-kwaliteit is social gaming concurrerend met bowling en lasergamen, en zeker goedkoper dan escape rooms.',
    },
    {
      question: 'Kunnen we drinken en eten erbij?',
      answer:
        'Meestal kun je dat regelen. Het is slim om dit meteen bij het boeken te checken met ClashRooms. Er zijn drankjes en snacks verkrijgbaar op locatie.',
    },
    {
      question: 'Hoe reserveer ik?',
      answer:
        'Via clashrooms.nl/boeken kun je je groepsgrootte selecteren, een moment kiezen en boeken. Heel snel, heel simpel.',
    },
  ];

  return (
    <>
      <HeroSection
        title="Groepsactiviteiten in Eindhoven"
        subtitle="Waarom social gaming de meest leuke manier is om samen iets te beleven"
        alignment="left"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-8">
            Keuze genoeg in Eindhoven
          </h2>
          <div className="max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Eindhoven biedt veel groepsactiviteiten. Bowlingbanen, lasergamen, escape rooms,
              paintball, go-karten... de keuze is groot. Maar wat als je iets zoekt dat echt
              voelt als "we spelen samen" en niet "we doen iets naast elkaar"?
            </p>
            <p>
              Daar blinkt social gaming in uit. In Eindhoven bieden we dat via ClashRooms.
              Het is niet zomaar nog een activiteit, maar dé activiteit die echt voelt als een
              gezamenlijke ervaring.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12">
            Dit zijn de meest populaire groepsactiviteiten
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Bowling',
                pro: 'Makkelijk, toegankelijk, kan voor alle leeftijden.',
                con: 'Veel stilte, je wacht veel, niet zoveel samenspel.',
                best: 'Voor ontspanning',
              },
              {
                title: 'Lasergamen',
                pro: 'Leuk, energiek, goed voor actie.',
                con: 'Erg donker, moeilijk om je vrienden te zien, veel lopers die niet deelnemen.',
                best: 'Voor adrenaline junkies',
              },
              {
                title: 'Escape Room',
                pro: 'Puzzels, spanning, goed voor breinwerk.',
                con: 'Duur, alleen voor kleinere groepen (max 6-8), kan frustrerend zijn.',
                best: 'Voor puzzelfanaten',
              },
              {
                title: 'Paintball',
                pro: 'Heftig, teamspel, veel adrenaline.',
                con: 'Duur, fysiek zwaar, kan pijn doen, niet voor iedereen.',
                best: 'Voor extreme types',
              },
              {
                title: 'Social Gaming (ClashRooms)',
                pro: 'Echt samen spelen, zeer toegankelijk, geen ervaring nodig, snel, goed voor alle groepsgroottes.',
                con: 'Vraagt wel wat focus en interesse in gaming (maar heel laag drempelig).',
                best: 'Voor echte samenbeleving',
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 ${
                  activity.title === 'Social Gaming (ClashRooms)'
                    ? 'bg-gradient-to-r from-accent to-accent-dark text-black'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="font-heading text-2xl font-bold mb-4">
                  {activity.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-semibold mb-2 opacity-75">VOORDELEN</p>
                    <p className={activity.title === 'Social Gaming (ClashRooms)' ? 'font-semibold' : 'text-gray-700'}>
                      {activity.pro}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2 opacity-75">NADELEN</p>
                    <p className={activity.title === 'Social Gaming (ClashRooms)' ? 'font-semibold' : 'text-gray-700'}>
                      {activity.con}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2 opacity-75">BESTE VOOR</p>
                    <p className={activity.title === 'Social Gaming (ClashRooms)' ? 'font-semibold' : 'text-gray-700'}>
                      {activity.best}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Kort gezegd: social gaming voelt als de meest "echte" groepsactiviteit. Je bent
              echt samen aan het spelen, niet naast elkaar.
            </p>
          </div>
        </div>
      </section>

      {/* Why Social Gaming */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12">
            Waarom kiezen voor social gaming in Eindhoven?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '🎮 Echt samen spelen',
                desc: 'Niet iedereen doet zijn eigen ding. Je speelt echt samen, je reageert op elkaar, je wint of verliest samen.',
              },
              {
                title: '🚀 Geen ervaring nodig',
                desc: 'Of je nou gamer bent of nooit een controller hebt vastgehouden: je bent er meteen klaar voor.',
              },
              {
                title: '⚡ Energiek en leuk',
                desc: 'Dit voelt als een échte avond. Spanning, adrenaline, gelach, herinneringen.',
              },
              {
                title: '💰 Goed voor je geld',
                desc: 'Veel plezier, weinig kosten. Goedkoper dan escape rooms, en meer plezier dan bowling.',
              },
              {
                title: '🏢 Voor alle groepsgroottes',
                desc: '4 vrienden? 20 collega\'s? 10 jarigen op een verjaardagsfeest? Allemaal geen probleem.',
              },
              {
                title: '⏰ Snel geboekt',
                desc: 'In een paar klikken ben je geboekt. Meestal nog dezelfde week beschikbaar.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8">
                <h3 className="font-heading text-xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ClashRooms Feature */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-8">
            ClashRooms: jouw plek in Eindhoven
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                ClashRooms is niet zomaar een gamingcafé. Het is speciaal opgezet voor sociale
                spelbeleving. Professionele setup, schermen die knallen, en games die voor
                groepen gemaakt zijn.
              </p>
              <p>
                Wil je meer weten over social gaming en hoe het werkt? Lees onze{' '}
                <Link
                  href="/wat-is-social-gaming"
                  className="text-accent font-semibold hover:text-accent-dark transition-colors"
                >
                  complete gids over social gaming
                </Link>
                .
              </p>
            </div>
            <img
              src="/img/socialgame1.png"
              alt="Team aan het werk in een Team Social Games kamer bij ClashRooms"
              className="w-full h-96 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={faqItems} title="Veelgestelde vragen" />

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
            Klaar voor een groepsactiviteit die echt werkt?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Boek nu je moment bij ClashRooms en maak het onvergetelijk voor je groep.
          </p>
          <CTAButton
            href="https://www.clashrooms.nl/boeken"
            label="Boek groepsactiviteit"
            variant="primary"
          />
        </div>
      </section>
    </>
  );
}
