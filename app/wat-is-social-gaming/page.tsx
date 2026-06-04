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
        'Nee, social gaming is veel meer dan online gamen. Het gaat om fysieke interactie, real-time samenspel, en gezamenlijke ervaringen. Terwijl online gaming thuis achter het scherm gebeurt, is social gaming iets wat je samen in één ruimte beleeft.',
    },
    {
      question: 'Moet ik gamer zijn om social gaming leuk te vinden?',
      answer:
        'Helemaal niet! Social gaming is speciaal ontworpen voor iedereen. Of je nou een hardcore gamer bent of nog nooit een controller hebt vastgehouden — je kunt voluit meegenieten. Het gaat om de sfeer en het plezier, niet om of je de beste bent.',
    },
    {
      question: 'Wat soort games worden gespeeld bij social gaming?',
      answer:
        'Dit varieert, maar het zijn meestal competitieve, snelle spellen waar teamwork telt. Dingen als race games, puzzel challenges, shooter games, en sports simulaties. Het idee is dat je snel feedback krijgt en constant in actie bent.',
    },
    {
      question: 'Hoeveel mensen kunnen tegelijk spelen?',
      answer:
        'Dat hangt af van de locatie en het soort spel. Veel social gaming venues zoals ClashRooms kunnen groepen van 2 tot 20+ personen aan. Je kunt in teams spelen, elk voor zich, of allerlei hybride formats.',
    },
    {
      question: 'Waarom is social gaming trending?',
      answer:
        'Omdat het een échte antidoot is tegen eenzaamheid en schermverslaving. In een wereld vol Zoom-meetings en thuiswerk willen mensen weer echt samen iets doen. Social gaming geeft dat gevoel van samenspelen, winnen, verliezen, en vooral: samen lachen.',
    },
    {
      question: 'Is social gaming alleen voor jongeren?',
      answer:
        'Nee, absoluut niet! We zien groepen van alle leeftijden. Vrienden van 16, 26, 36, 46, 56... collega\'s, familie, ouders met kinderen. Het enige wat je nodig hebt is zin om wat plezier te hebben.',
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
          <div className="max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Social gaming is gaming in zijn puurste vorm: samen, in hetzelfde moment, met
              echte interactie. Je zit niet op Discord terwijl je thuis achter je PC zit — je
              zit in dezelfde ruimte, je voelt de adrenaline van je medespelers, je hoort de
              reacties, je viert samen.
            </p>
            <p>
              Het gaat om competitie, samenwerking, en vooral om het moment. Je bent niet bezig
              met een 40-urige campaign — je speelt snelle, intense sessies waar het om gaat hoe
              je als groep functioneert onder druk.
            </p>
            <p>
              Denk aan je vrienden, je collega's, of je familie aan het scherm, iedereen voelt
              de spanning, iedereen reageert tegelijk. Dat is social gaming. Het is veel meer
              dan alleen spelen — het is een gezamenlijke ervaring.
            </p>
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
                desc: 'Racing, shooting, sports simulaties. Je bent tegen elkaar aan het spelen, live reacties, echte spanning.',
              },
              {
                title: 'Team-based challenges',
                desc: 'Veel social gaming is erop gericht dat teams samenwerken. Je hebt elkaar nodig, je communiceert, je wint samen of verliest samen.',
              },
              {
                title: 'Arcade-style fun',
                desc: 'Snelle, toegankelijke spellen die iedereen kan meespelen. Niet ingewikkeld, gewoon plezier.',
              },
              {
                title: 'Tournaments & ranking',
                desc: 'Sommige venues organiseren tornooien. Je speelt best-of-three, je werkt toe naar een finale. Échte spanning!',
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
              <strong>Burn-out preventie:</strong> We zitten allemaal veel achter schermen. Een
              moment om echt samen iets te doen — offline, fysiek aanwezig — dat voelt goed. Het
              is een break van de routine.
            </p>
            <p>
              <strong>Echte connectie:</strong> Video games thuis zijn eenzaam. Social gaming
              geeft je dat gevoel van échte samenspel. Je hoort je vrienden lachen, je voelt de
              competitie, je maakt herinneringen.
            </p>
            <p>
              <strong>Geen vriendschappen nodig:</strong> Je hoeft niet al verliefd op games te
              zijn. Je bent verliefd op plezier met elkaar hebben. Social gaming haalt gamen uit
              zijn niche en maakt het sociaal — leuk voor iedereen.
            </p>
            <p>
              <strong>Generatieoverschrijdend:</strong> Terwijl traditionele gaming vooral voor
              jong volwassenen voelde, haalt social gaming iedereen mee. Family bonding met
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
                desc: 'Zoeken naar een avond die niet zomaar is? Iets met meer pulp dan standaard cinema of restaurant? Dit is het.',
              },
              {
                title: 'Bedrijven en teams',
                desc: 'Team building die real is. Je leert je collega\'s kennen, je speelt echt samen, er gebeurt wat.',
              },
              {
                title: 'Familie',
                desc: 'Ouders met kinderen, broers met zussen, hele families. Social gaming werkt voor iedereen.',
              },
              {
                title: 'Verjaardagen en special occasions',
                desc: 'Een verjaardagsfeest wat je niet vergeet. Iedereen is bezig, iedereen speelt mee, iedereen geniet.',
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
            De beste manier om te begrijpen wat social gaming is, is het zelf ervaren. Bei
            ClashRooms in Eindhoven kan je meteen aan de slag.
          </p>
          <CTAButton
            href="https://clashrooms.nl/boeken"
            label="Boek je sessie nu"
            variant="primary"
          />
        </div>
      </section>
    </>
  );
}
