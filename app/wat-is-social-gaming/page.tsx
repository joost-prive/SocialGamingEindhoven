import HeroSection from '@/components/HeroSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTAButton from '@/components/CTAButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wat is social gaming? | Ontdek het concept',
  description:
    'Social gaming is veel meer dan gamen. Ontdek wat het is, waarom het trending is, en wie het kan doen. Complete gids hier!',
};

export default function WatIsSocialGaming() {
  const faqItems = [
    {
      question: 'Is social gaming hetzelfde als online gamen?',
      answer:
        'Nee, social gaming is veel meer dan online gamen. Het gaat om fysieke interactie, real-time samenspel en gezamenlijke ervaringen. Terwijl online gaming thuis achter het scherm gebeurt, is social gaming iets wat je samen in één ruimte beleeft.',
    },
    {
      question: 'Moet ik gamer zijn om social gaming leuk te vinden?',
      answer:
        'Helemaal niet! Social gaming is speciaal ontworpen voor iedereen. Of je nou een doorgewinterde gamer bent of nog nooit een controller hebt vastgehouden: je kunt voluit meegenieten. Het gaat om de sfeer en het plezier, niet om of je de beste bent.',
    },
    {
      question: 'Wat voor games worden er gespeeld bij social gaming?',
      answer:
        'Dit varieert, maar het zijn meestal competitieve, snelle spellen waar teamwork telt. Denk aan racespellen, puzzelopdrachten, behendigheidsspellen en sportsimulaties. Het idee is dat je snel resultaat ziet en constant in actie bent.',
    },
    {
      question: 'Hoeveel mensen kunnen tegelijk spelen?',
      answer:
        'Dat hangt af van de locatie en het soort spel. Veel social gaming locaties zoals ClashRooms kunnen groepen van 2 tot 20+ personen aan. Je kunt in teams spelen, ieder voor zich, of in allerlei hybride formats.',
    },
    {
      question: 'Waarom is social gaming nu zo populair?',
      answer:
        'Omdat het een écht tegengif is tegen eenzaamheid en schermverslaving. In een wereld vol Zoom-meetings en thuiswerk willen mensen weer echt samen iets doen. Social gaming geeft dat gevoel van samenspelen, winnen, verliezen, en vooral: samen lachen.',
    },
    {
      question: 'Is social gaming alleen voor jongeren?',
      answer:
        'Nee, absoluut niet! We zien groepen van alle leeftijden. Vrienden van 16, 26, 36, 46, 56... collega\'s, familie, ouders met kinderen. Het enige wat je nodig hebt is zin in een leuke tijd.',
    },
  ];

  return (
    <>
      <HeroSection
        title="Wat is social gaming?"
        subtitle="Het begrip dat gaming van eenzaam naar écht sociaal maakt"
        alignment="left"
      />

      {/* What is it */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-8">
            De volledige uitleg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Social gaming is gaming in zijn puurste vorm: samen, in hetzelfde moment, met
                echte interactie. Je zit niet op Discord terwijl je thuis achter je PC zit. Je
                zit in dezelfde ruimte, je voelt de adrenaline van je medespelers, je hoort de
                reacties, je viert samen.
              </p>
              <p>
                Het gaat om competitie, samenwerking, en vooral om het moment. Je bent niet bezig
                met een 40-urige campagne. Je speelt snelle, intense sessies waar het om gaat hoe
                je als groep functioneert onder druk.
              </p>
              <p>
                Denk aan je vrienden, je collega&apos;s of je familie samen aan het spelen.
                Iedereen voelt de spanning, iedereen reageert tegelijk. Dat is social gaming.
                Het is veel meer dan alleen spelen, het is een gezamenlijke ervaring.
              </p>
            </div>
            <img
              src="/img/cupstacking.png"
              alt="Team viert juichend een cup stacking uitdaging bij ClashRooms in Eindhoven"
              className="w-full h-96 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Examples and Formats */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12">
            Voorbeelden en formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Competitieve games',
                desc: 'Racen, behendigheid, sportsimulaties. Je speelt tegen elkaar met live reacties en echte spanning.',
              },
              {
                title: 'Team-uitdagingen',
                desc: 'Veel social gaming draait om samenwerking. Je hebt elkaar nodig, je communiceert, je wint of verliest samen.',
              },
              {
                title: 'Toegankelijk plezier',
                desc: 'Snelle, laagdrempelige spellen die iedereen kan meespelen. Niet ingewikkeld, gewoon plezier.',
              },
              {
                title: 'Toernooien en ranking',
                desc: 'Sommige locaties organiseren toernooien. Je speelt best-of-three en werkt toe naar een finale. Échte spanning!',
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

      {/* Why is it trending */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-8">
            Waarom is social gaming trending?
          </h2>
          <div className="max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>Tegen de schermmoeheid:</strong> We zitten allemaal veel achter beeldschermen.
              Een moment om echt samen iets te doen, offline en fysiek aanwezig: dat voelt goed.
              Het is een welkome onderbreking van de routine.
            </p>
            <p>
              <strong>Echte connectie:</strong> Thuis gamen kan eenzaam zijn. Social gaming
              geeft je dat gevoel van écht samenspel. Je hoort je vrienden lachen, je voelt de
              competitie, je maakt herinneringen.
            </p>
            <p>
              <strong>Geen gamerservaring nodig:</strong> Je hoeft niet al gek te zijn op games.
              Je bent gek op plezier met elkaar hebben. Social gaming haalt gamen uit de niche
              en maakt het sociaal: leuk voor iedereen.
            </p>
            <p>
              <strong>Generatieoverschrijdend:</strong> Terwijl traditionele gaming vooral voor
              jongvolwassenen voelde, haalt social gaming iedereen mee. Familieplezier met
              social gaming? Dat werkt!
            </p>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12">
            Voor wie is het?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Vrienden die iets willen doen',
                desc: 'Op zoek naar een avond die er echt uitspringt? Iets met meer pit dan de standaard bios of een restaurant? Dit is het.',
              },
              {
                title: 'Bedrijven en teams',
                desc: 'Teambuilding die écht is. Je leert je collega\'s kennen, je speelt echt samen, er gebeurt wat.',
              },
              {
                title: 'Familie',
                desc: 'Ouders met kinderen, broers met zussen, hele families. Social gaming werkt voor iedereen.',
              },
              {
                title: 'Verjaardagen en bijzondere gelegenheden',
                desc: 'Een verjaardagsfeest dat je niet vergeet. Iedereen is bezig, iedereen speelt mee, iedereen geniet.',
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

      {/* FAQ */}
      <FAQAccordion items={faqItems} title="Veelgestelde vragen" />

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
            Klaar om het zelf te proberen?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            De beste manier om te begrijpen wat social gaming is, is het zelf ervaren. Bij
            ClashRooms in Eindhoven kun je meteen aan de slag.
          </p>
          <CTAButton
            href="https://www.clashrooms.nl/boeken"
            label="Boek je sessie nu"
            variant="primary"
          />
        </div>
      </section>
    </>
  );
}
