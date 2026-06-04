import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Escape room vs. social gaming: wat is leuker?',
  description:
    'Beide populair in Eindhoven. Maar wat is het verschil? En welke kies je beter? Eerlijke vergelijking.',
};

export default function EscapeRoomVsSocialGaming() {
  return (
    <>
      <article className="min-h-screen">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-max max-w-3xl">
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>10 mei 2025</span>
              <span>•</span>
              <span>7 min leestijd</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-4">
              Escape room vs. social gaming: wat is leuker?
            </h1>
            <p className="text-lg text-gray-700">
              Beide zijn populair in Eindhoven. Maar wat is het verschil, en welke is beter?
              Eerlijke vergelijking.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl prose prose-lg">
            <p>
              Eindhoven biedt veel groepsactiviteiten. Twee van de populairste zijn escape rooms
              en social gaming. Beide zijn leuk, beide zijn anders. Maar welke is beter? Laten we
              eerlijk vergelijken.
            </p>

            <h2>Escape rooms: wat zijn het?</h2>
            <p>
              Je zit in een versloten ruimte en moet via puzzels, raadsels en verborgen aanwijzingen
              eruit ontsnappen. Meestal heb je 60 minuten. Je werkt samen, je praat, je denkt na.
              Heel anders dan social gaming.
            </p>

            <h2>Social gaming: wat is het?</h2>
            <p>
              Social gaming is je samen in dezelfde ruimte bevinden, aan controllers, schermen,
              real-time spellen spelen. Je speelt echt samen, je reageert op elkaar, snel, energiek,
              fysiek.
            </p>

            <h2>Escape rooms: voordelen</h2>
            <ul>
              <li>
                <strong>Echte spanning:</strong> Je voelt echt dat je bezig bent iets te doen
                (ontsnappen). Niet zomaar een spel.
              </li>
              <li>
                <strong>Puzzels:</strong> Als je van denken houdt, is dit heerlijk. Echte
                breinwerk.
              </li>
              <li>
                <strong>Immersief:</strong> Je bent echt in een thema, voelt als een adventure.
              </li>
              <li>
                <strong>Team bonding:</strong> Je moet echt samenwerken om te ontsnappen.
              </li>
            </ul>

            <h2>Escape rooms: nadelen</h2>
            <ul>
              <li>
                <strong>Duur:</strong> €20-30 per persoon is niet ongewoon. Voor groepen kan dit
                snel oplopen.
              </li>
              <li>
                <strong>Klein groep:</strong> Escape rooms werken best met 4-6 personen. Meer
                wordt het te vol.
              </li>
              <li>
                <strong>Frustrerend:</strong> Als je puzzels niet snapt, of je steekt twee uur
                ergens in vast — kan frustrerend voelen.
              </li>
              <li>
                <strong>Veel wachten:</strong> Als je niet slim bent, sta je veel te wachten
                terwijl anderen denken.
              </li>
              <li>
                <strong>Niet per se teamwork:</strong> Soms doet één persoon alles, rest staat
                toe te kijken.
              </li>
            </ul>

            <h2>Social gaming: voordelen</h2>
            <ul>
              <li>
                <strong>Echt together-gevoel:</strong> Iedereen speelt echt mee. Niemand staat
                aan de zijlijn.
              </li>
              <li>
                <strong>Snel:</strong> Je bent meteen in actie. Geen inleidingen, geen wachten.
              </li>
              <li>
                <strong>Voor alle groepsgroottes:</strong> 4 mensen? Prima. 15 mensen? Prima.
              </li>
              <li>
                <strong>Geen ervaring nodig:</strong> Je hoeft geen gamer te zijn. Iedereen kan
                meedoen.
              </li>
              <li>
                <strong>Energiek:</strong> Dit voelt als échte samenbeleving. Veel adrenaline,
                veel gelach.
              </li>
              <li>
                <strong>Betaalbaar:</strong> Per persoon, duidelijke prijs. Goedkoper dan escape
                rooms.
              </li>
            </ul>

            <h2>Social gaming: nadelen</h2>
            <ul>
              <li>
                <strong>Vraagt interesse:</strong> Je moet wel zin hebben in spelletjes. Maar
                heel laag drempelig.
              </li>
              <li>
                <strong>Geen "verhaal":</strong> Je bent niet aan het ontsnappen uit een castle,
                je speelt gewoon games.
              </li>
            </ul>

            <h2>Wat is het verschil?</h2>
            <p>
              Escape rooms zijn mentaal. Je denkt, je lost puzzels op, je voelt jezelf clever
              wanneer je iets snapt. Het voelt als een adventure.
            </p>
            <p>
              Social gaming is fysiek en energiek. Je bent in actie, je reageert snel, je
              concurreert. Het voelt als échte samenbeleving.
            </p>

            <h2>Voor welke groep is wat beter?</h2>
            <p>
              <strong>Escape rooms zijn beter voor:</strong> Puzzelfanaten, kleine groepen (4-6),
              mensen die van denken houden, team building dat "anders" moet voelen.
            </p>
            <p>
              <strong>Social gaming is beter voor:</strong> Grote groepen, energieke groepen,
              bedrijven (teamwork matters), verjaardagen, mensen die iets willen doen (niet te
              veel denken).
            </p>

            <h2>De eerlijke waarheid</h2>
            <p>
              Beiden zijn leuk. Maar als we eerlijk zijn: social gaming voelt veel meer als "we
              doen iets samen" en escape rooms voelen meer als "we proberen iets op te lossen
              terwijl we in dezelfde kamer zitten."
            </p>
            <p>
              Voor teams, groepen vrienden, bedrijfsuitjes: social gaming wint. Je bent echt
              together, niet naast elkaar bezig.
            </p>

            <h2>Wat zeggen de nummers?</h2>
            <p>
              Escape rooms: €20-30/pp, tot 6 mensen, 60 minuten, mentaal.
            </p>
            <p>
              Social gaming: €15-25/pp, tot 20+ mensen, 60-90 minuten, fysiek.
            </p>
            <p>
              Social gaming wint op prijs, groepsgrootte, en "met-elkaar-gevoel".
            </p>

            <h2>Klaar om het zelf uit te proberen?</h2>
            <p>
              De beste manier om te weten wat je prefereert: probeer het zelf! Bij ClashRooms
              in Eindhoven kan je meteen aan de slag.
            </p>
            <p>
              Lees meer over{' '}
              <Link
                href="/wat-is-social-gaming"
                className="text-accent font-semibold hover:text-accent-dark"
              >
                wat social gaming is
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-max max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-black mb-4">
              Wil je het zelf voelen?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Social gaming bij ClashRooms. Boek nu en voel het verschil.
            </p>
            <CTAButton
              href="https://clashrooms.nl/boeken"
              label="Boek je sessie nu"
              variant="primary"
            />
          </div>
        </section>
      </article>
    </>
  );
}
