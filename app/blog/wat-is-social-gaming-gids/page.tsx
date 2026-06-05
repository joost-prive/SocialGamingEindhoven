import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wat is social gaming? De complete gids',
  description:
    'Alles wat je moet weten over social gaming. Wat is het, waarom is het populair, wie kan het doen, hoe werkt boeken. Complete gids.',
};

export default function SocialGamingGids() {
  return (
    <>
      <article className="min-h-screen">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-max max-w-3xl">
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>5 mei 2026</span>
              <span>•</span>
              <span>10 min leestijd</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-4">
              Wat is social gaming? De complete gids
            </h1>
            <p className="text-lg text-gray-700">
              Alles wat je moet weten. Van definitie tot hoe je het boekt.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl prose prose-lg">
            <h2>Wat is social gaming precies?</h2>
            <p>
              Social gaming is samen gamen, in dezelfde ruimte, op hetzelfde moment, met echte
              interactie. Je speelt niet thuis alleen op de bank. Je bent met vrienden,
              collega&apos;s of familie aan dezelfde games, je reageert op elkaar live, je voelt
              de spanning samen.
            </p>
            <p>
              Het gaat om competitie, samenwerking en vooral om het moment. Snelle games waar je
              snel resultaat ziet. Games waar teamwork telt. Games waar iedereen aan mee kan doen.
            </p>

            <h2>Hoe werkt het?</h2>
            <p>
              Je bezoekt een social gaming locatie (zoals ClashRooms in Eindhoven). Je groep gaat
              naar een ruimte met professionele setups: grote schermen, goede audio, controllers
              klaar. Je kiest of je tegen elkaar speelt of samen.
            </p>
            <p>
              Games kunnen van alles zijn: races, behendigheid, sportsimulaties, partyspellen.
              Het idee is dat je snel in actie bent en echt als groep speelt.
            </p>

            <h2>Hoe lang duurt een sessie?</h2>
            <p>
              Meestal 60 tot 90 minuten. Dat is genoeg voor een warm-up, een aantal echte games,
              en eventueel een finale. Niet te lang, niet te kort.
            </p>

            <h2>Hoeveel kost het?</h2>
            <p>
              Per persoon, meestal €15 tot €25 afhankelijk van hoe lang en wat je speelt.
              Duidelijke prijs, geen verborgen kosten. Goedkoper dan escape rooms, vergelijkbaar
              met bowling.
            </p>

            <h2>Wie kan het doen?</h2>
            <ul>
              <li>
                <strong>Vrienden:</strong> Op zoek naar iets energieks? Perfect.
              </li>
              <li>
                <strong>Familie:</strong> Ouders, kinderen, opa en oma: iedereen kan meedoen.
              </li>
              <li>
                <strong>Collega&apos;s:</strong> Teambuilding waar iedereen echt aan mee kan
                doen.
              </li>
              <li>
                <strong>Verjaardagen:</strong> Voor elke leeftijd, iedereen speelt mee.
              </li>
              <li>
                <strong>Willekeurige groep:</strong> Nog nooit gegamed? Geen probleem. Heel
                laagdrempelig.
              </li>
            </ul>

            <h2>Moet ik gamer zijn?</h2>
            <p>
              Nee. Social gaming is speciaal ontworpen voor gemengde groepen. Of je nou een
              doorgewinterde gamer bent of nog nooit een controller hebt vastgehouden: je speelt
              mee. Het gaat om het plezier, niet om of je de beste bent.
            </p>

            <h2>Wat voor games?</h2>
            <p>
              Dit varieert per locatie, maar meestal:
            </p>
            <ul>
              <li>
                <strong>Races:</strong> Snelle autospellen waar je tegen elkaar racet.
              </li>
              <li>
                <strong>Behendigheid:</strong> Teamspellen waar je tegenstanders uitschakelt.
              </li>
              <li>
                <strong>Sportsimulaties:</strong> Voetbal, basketbal, tennis.
              </li>
              <li>
                <strong>Partyspellen:</strong> Snelle, leuke spellen voor grote groepen.
              </li>
            </ul>

            <h2>Waarom is social gaming populair?</h2>
            <p>
              <strong>Tegen de schermmoeheid:</strong> We zitten veel achter beeldschermen.
              Social gaming geeft je een écht moment samen.
            </p>
            <p>
              <strong>Echte connectie:</strong> Online gamen kan eenzaam zijn. Social gaming
              geeft je écht samenspel. Je hoort je vrienden lachen, je voelt de spanning.
            </p>
            <p>
              <strong>Niet langer niche:</strong> Gaming voelde vroeger alleen voor gamers.
              Social gaming haalt het uit die niche. Het is voor iedereen.
            </p>
            <p>
              <strong>Generatieoverschrijdend:</strong> Ouders spelen met kinderen, opa speelt
              mee. Allemaal mogelijk.
            </p>

            <h2>Social gaming vs online gamen</h2>
            <p>
              <strong>Online gamen:</strong> Thuis, alleen, via een netwerk met vrienden. Chill,
              geen echte spanning, flexibel.
            </p>
            <p>
              <strong>Social gaming:</strong> Bij een locatie, samen, live interactie. Energie,
              adrenaline, herinneringen.
            </p>
            <p>
              Beide zijn leuk, maar social gaming voelt veel meer als échte samenbeleving.
            </p>

            <h2>Social gaming vs arcade</h2>
            <p>
              Arcade games zijn vaak 1 tegen 1 of je-voor-jezelf. Social gaming is samen spelen,
              teamwork, wedstrijden als groep.
            </p>
            <p>
              Arcade voelt meer als "iedereen doet zijn ding", social gaming voelt als "we spelen
              echt tegen en met elkaar".
            </p>

            <h2>Tips voor je eerste keer</h2>
            <ul>
              <li>
                <strong>Ga met vrienden:</strong> De eerste keer voelt prettiger met mensen die
                je kent.
              </li>
              <li>
                <strong>Zeg dat je geen gamer bent:</strong> Locaties houden hier rekening mee en
                kiezen toegankelijke games.
              </li>
              <li>
                <strong>Laat je meeslepen door de competitie:</strong> Daar zit het in. Je hoeft
                niet goed te zijn, je hoeft mee te doen.
              </li>
              <li>
                <strong>Zorg voor drinken:</strong> Dit is energiek! Neem iets mee of koop ter
                plaatse.
              </li>
            </ul>

            <h2>Hoe boek je?</h2>
            <p>
              Bij ClashRooms in Eindhoven:
            </p>
            <ol>
              <li>Ga naar clashrooms.nl/boeken</li>
              <li>Selecteer je groepsgrootte</li>
              <li>Kies een moment dat past</li>
              <li>Vul je gegevens in</li>
              <li>Betaal</li>
              <li>Je bent geboekt!</li>
            </ol>

            <h2>Veelgestelde vragen</h2>
            <p>
              <strong>Kan ik ook in mijn eentje spelen?</strong> Ja, maar het voelt minder leuk.
              Social gaming is echt bedoeld voor groepen.
            </p>
            <p>
              <strong>Kun je drinken en eten meebrengen?</strong> Meestal wel, maar check dit met
              de locatie. Veel locaties hebben ook zelf drankjes.
            </p>
            <p>
              <strong>Wat als ik wagenziek word van games?</strong> Check dit vooraf. Sommige
              games kunnen lastig zijn voor mensen die gevoelig zijn voor beweging op het scherm.
            </p>
            <p>
              <strong>Is dit alleen voor jongeren?</strong> Nee, alle leeftijden. We zien alles
              van 10 tot 70 jaar.
            </p>

            <h2>Conclusie</h2>
            <p>
              Social gaming is gamechanging (pun intended). Het is een échte manier om samen iets
              te beleven. Niet zomaar gamen, maar samen gamen.
            </p>
            <p>
              Klaar om het zelf uit te proberen?{' '}
              <Link
                href="/groepsactiviteiten-eindhoven"
                className="text-accent font-semibold hover:text-accent-dark"
              >
                Lees meer over groepsactiviteiten
              </Link>{' '}
              of{' '}
              <Link
                href="/bedrijfsuitje-eindhoven"
                className="text-accent font-semibold hover:text-accent-dark"
              >
                teambuilding ideeën
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-max max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-black mb-4">
              Voelde dit leuk?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Boek nu je social gaming sessie bij ClashRooms en ervaar het zelf.
            </p>
            <CTAButton
              href="https://www.clashrooms.nl/boeken"
              label="Boek je sessie nu"
              variant="primary"
            />
          </div>
        </section>
      </article>
    </>
  );
}
