import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 groepsactiviteiten in Eindhoven (2026)',
  description:
    'De beste groepsactiviteiten in Eindhoven: social gaming, escape rooms, bowling, lasergamen en meer. Met voor en nadelen.',
};

export default function Top10Groepsactiviteiten() {
  return (
    <>
      <article className="min-h-screen">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-max max-w-3xl">
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>15 mei 2026</span>
              <span>•</span>
              <span>8 min leestijd</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-4">
              Top 10 groepsactiviteiten in Eindhoven (2026)
            </h1>
            <p className="text-lg text-gray-700">
              Wat zijn de leukste dingen om samen te doen in Eindhoven? We zetten de top 10 op
              een rij.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl prose prose-lg">
            <p>
              Eindhoven biedt veel mogelijkheden voor groepsactiviteiten. Of je nou vrienden,
              collega&apos;s of familie meeneemt: er is altijd iets te doen. In dit artikel zetten
              we de top 10 groepsactiviteiten op een rij, met eerlijke voor en nadelen.
            </p>

            <h2>1. Social Gaming (ClashRooms)</h2>
            <p>
              Social gaming is gaming in zijn puurste vorm: samen, in hetzelfde moment, met echte
              interactie. Je speelt echt mee, je reageert op elkaar, je wint of verliest samen.
            </p>
            <p>
              <strong>Voordelen:</strong> Echt samenspel, zeer toegankelijk, geen ervaring nodig,
              voor alle groepsgroottes, goed voor energie en teamwork.
            </p>
            <p>
              <strong>Nadelen:</strong> Vraagt wat interesse in spelletjes (maar heel
              laagdrempelig).
            </p>
            <p>
              <strong>Beste voor:</strong> Vrienden, teams, verjaardagen, bedrijfsuitjes. Kort
              gezegd: iedereen die echt samen iets wil beleven.
            </p>

            <h2>2. Escape Room</h2>
            <p>
              Je zit in een afgesloten kamer en moet puzzels oplossen om eruit te komen. Met
              teamwerk en breinwerk zoek je je weg eruit.
            </p>
            <p>
              <strong>Voordelen:</strong> Spannende sfeer, puzzels die voelen alsof je iets doet,
              goed voor samenwerking.
            </p>
            <p>
              <strong>Nadelen:</strong> Duur, alleen voor kleine groepen (max 6 tot 8), kan
              frustrerend zijn, niet alles geschikt voor wie geen puzzels lust.
            </p>
            <p>
              <strong>Beste voor:</strong> Puzzelfanaten, kleine groepen, teambuilding.
            </p>

            <h2>3. Bowling</h2>
            <p>
              Klassiek, ontspannend en bijna iedereen kan het. Je gooit ballen naar kegels en
              kijkt wie hoger scoort.
            </p>
            <p>
              <strong>Voordelen:</strong> Makkelijk, goedkoop, voor alle leeftijden, geen
              voorbereiding nodig.
            </p>
            <p>
              <strong>Nadelen:</strong> Veel wachten, weinig real-time samenspel, kan saai voelen.
            </p>
            <p>
              <strong>Beste voor:</strong> Ontspanning, gemengde groepen, als onderdeel van een
              groter programma.
            </p>

            <h2>4. Lasergamen</h2>
            <p>
              Je loopt door donkere zalen en schiet op je tegenstanders met laserpistolen.
              Energiek en vol actie.
            </p>
            <p>
              <strong>Voordelen:</strong> Energiek, goed voor actie, kan in grotere groepen,
              teamwork.
            </p>
            <p>
              <strong>Nadelen:</strong> Erg donker, moeilijk om vrienden te zien, veel wachten
              voor wie niet meedoet, kan intimiderend zijn voor sommigen.
            </p>
            <p>
              <strong>Beste voor:</strong> Actieve groepen, jongeren, adrenalineliefhebbers.
            </p>

            <h2>5. Paintball</h2>
            <p>
              Je speelt in teams en schiet met paintballkogels op tegenstanders. Heftig, teamspel,
              veel adrenaline.
            </p>
            <p>
              <strong>Voordelen:</strong> Heftig, sterk op teamwork, veel adrenaline.
            </p>
            <p>
              <strong>Nadelen:</strong> Duur, fysiek zwaar, kan pijn doen, niet voor iedereen,
              lastig voor grotere groepen.
            </p>
            <p>
              <strong>Beste voor:</strong> Extreme types, teams die zichzelf willen testen,
              jongeren.
            </p>

            <h2>6. Karten</h2>
            <p>
              Je zit in echte (kleine) racewagens en racet tegen elkaar. Echte competitie, echte
              adrenaline.
            </p>
            <p>
              <strong>Voordelen:</strong> Echt racen, echte competitie, adrenalinerush.
            </p>
            <p>
              <strong>Nadelen:</strong> Duur, je kunt niet veel tegelijk doen, vrij logistiek.
            </p>
            <p>
              <strong>Beste voor:</strong> Autoliefhebbers, racefans, teams die graag
              concurreren.
            </p>

            <h2>7. Axe Throwing</h2>
            <p>
              Je werpt bijlen naar houten doelen. Trendy, fysiek en voelt heel anders.
            </p>
            <p>
              <strong>Voordelen:</strong> Uniek, fysiek, leuk, relatief goedkoop.
            </p>
            <p>
              <strong>Nadelen:</strong> Niet voor grote groepen tegelijk, vraagt concentratie,
              wat beperkt in variatie.
            </p>
            <p>
              <strong>Beste voor:</strong> Kleine groepen, gezelligheidszoekers, mensen die iets
              anders willen.
            </p>

            <h2>8. Karaoke</h2>
            <p>
              Je zingt liedjes. Grappig, ontspannend, veel gelach. Perfect voor avonden uit.
            </p>
            <p>
              <strong>Voordelen:</strong> Veel gelach, voor alle leeftijden, ontspannend,
              betaalbaar.
            </p>
            <p>
              <strong>Nadelen:</strong> Kan ongemakkelijk voelen (je staat in de spotlight), niet
              voor wie echt niet wil zingen.
            </p>
            <p>
              <strong>Beste voor:</strong> Vrienden, avonden uit, mensen die graag zingen.
            </p>

            <h2>9. Kookworkshop</h2>
            <p>
              Je kookt samen met een chef. Hands-on, je leert iets, en je eet wat je gemaakt
              hebt.
            </p>
            <p>
              <strong>Voordelen:</strong> Interactief, je leert iets, lekker eindresultaat,
              teamwork.
            </p>
            <p>
              <strong>Nadelen:</strong> Kan duur zijn, vrij lang, niet voor wie totaal niet kan
              koken.
            </p>
            <p>
              <strong>Beste voor:</strong> Foodliefhebbers, teams, kleinere groepen.
            </p>

            <h2>10. VR Experience</h2>
            <p>
              Virtual reality spelletjes. Meeslepend, modern, en je beleeft wat je anders niet
              beleeft.
            </p>
            <p>
              <strong>Voordelen:</strong> Modern, meeslepend, unieke ervaring, voor kleine
              groepen.
            </p>
            <p>
              <strong>Nadelen:</strong> Niet altijd geschikt voor grote groepen tegelijk, kan
              duur zijn.
            </p>
            <p>
              <strong>Beste voor:</strong> Techliefhebbers, mensen die iets unieks willen.
            </p>

            <h2>Wat kun je beter doen?</h2>
            <p>
              Elke activiteit heeft zijn voordelen. Maar als je echt op zoek bent naar iets waar
              iedereen in je groep aan mee kan doen, waar het voelt als echte samenbeleving, en
              waar je geen voorbereiding voor nodig hebt, dan is{' '}
              <Link
                href="/wat-is-social-gaming"
                className="text-accent font-semibold hover:text-accent-dark"
              >
                social gaming
              </Link>{' '}
              dé keuze.
            </p>
            <p>
              Ontdek meer over het concept op onze{' '}
              <Link
                href="/groepsactiviteiten-eindhoven"
                className="text-accent font-semibold hover:text-accent-dark"
              >
                groepsactiviteiten pagina
              </Link>{' '}
              of{' '}
              <Link
                href="/bedrijfsuitje-eindhoven"
                className="text-accent font-semibold hover:text-accent-dark"
              >
                bedrijfsuitje pagina
              </Link>
              .
            </p>

            <h2>Klaar om het zelf te proberen?</h2>
            <p>
              Boek nu je moment bij ClashRooms en ontdek waarom social gaming steeds populairder
              wordt in Eindhoven.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-max max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-black mb-4">
              Klaar om te spelen?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Boek nu je groepsactiviteit bij ClashRooms en beleef het verschil.
            </p>
            <CTAButton
              href="https://www.clashrooms.nl/boeken"
              label="Boek je moment nu"
              variant="primary"
            />
          </div>
        </section>
      </article>
    </>
  );
}
