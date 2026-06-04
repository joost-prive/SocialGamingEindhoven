import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wat is social gaming? De complete gids',
  description:
    'Alles wat je moet weten over social gaming. Wat is het, waarom is het trending, wie kan het doen, hoe boeking werkt. Complete gids.',
};

export default function SocialGamingGids() {
  return (
    <>
      <article className="min-h-screen">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-max max-w-3xl">
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>5 mei 2025</span>
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
              Social gaming is gamen samen, in dezelfde ruimte, op dezelfde moment, met echte
              interactie. Je speelt niet thuis alleen op je couch — je bent met vrienden, collega's,
              of familie aan dezelfde games, je reageert op elkaar live, je voelt de spanning
              samen.
            </p>
            <p>
              Het gaat om competitie, samenwerking, en vooral om het moment. Snelle games waar je
              snel feedback krijgt. Games waar teamwork telt. Games waar iedereen mee kan doen.
            </p>

            <h2>Hoe werkt het?</h2>
            <p>
              Je bezoekt een social gaming venue (zoals ClashRooms in Eindhoven). Je groep gaat
              naar een ruimte met professionele setups: grote schermen, goede audio, controllers
              klaar. Je kiest of je tegen elkaar speelt of samen.
            </p>
            <p>
              Games kunnen van alles zijn: racers, shooters, sport simulaties, party games. Het
              idee is dat je snel in actie bent en echt als groep speelt.
            </p>

            <h2>Hoe lang duurt een sessie?</h2>
            <p>
              Meestal 60-90 minuten. Dat is genoeg voor een warm-up game, een aantal echte games,
              misschien een finale. Niet te lang, niet te kort.
            </p>

            <h2>Hoeveel kost het?</h2>
            <p>
              Per persoon, meestal €15-25 afhankelijk van hoe lang en wat je speelt. Duidelijke
              prijs, geen verborgen kosten. Goedkoper dan escape rooms, vergelijkbaar met bowling.
            </p>

            <h2>Wie kan het doen?</h2>
            <ul>
              <li>
                <strong>Vrienden:</strong> Zoeken naar iets energieks? Parfait.
              </li>
              <li>
                <strong>Familie:</strong> Ouders, kinderen, opa en oma — iedereen kan meedoen.
              </li>
              <li>
                <strong>Collega's:</strong> Team building waar iedereen echt aan mee kan doen.
              </li>
              <li>
                <strong>Verjaardagen:</strong> Voor elk leeftijd, iedereen speelt mee.
              </li>
              <li>
                <strong>Willekeurige groep:</strong> Niet eerder gamen? Geen probleem. Laag
                drempelig.
              </li>
            </ul>

            <h2>Moet ik gamer zijn?</h2>
            <p>
              Nee. Social gaming is speciaal ontworpen voor gemengde groepen. Of je nou een
              hardcore gamer bent of nog nooit een controller hebt vastgehouden — je speelt mee.
              Het gaat om het plezier, niet om of je de beste bent.
            </p>

            <h2>Wat soort games?</h2>
            <p>
              Dit varieert per venue, maar meestal:
            </p>
            <ul>
              <li>
                <strong>Racers:</strong> Snelle auto games waar je tegen elkaar racet.
              </li>
              <li>
                <strong>Shooters:</strong> Teamwork-games waar je tegenstanders uit schakelt.
              </li>
              <li>
                <strong>Sports sims:</strong> Voetbal, basketbal, tennis simulaties.
              </li>
              <li>
                <strong>Party games:</strong> Snelle, leuke spellen voor grote groepen.
              </li>
            </ul>

            <h2>Waarom is social gaming trending?</h2>
            <p>
              <strong>Burn-out preventie:</strong> We zitten veel achter schermen. Social gaming
              geeft je echt moment samen.
            </p>
            <p>
              <strong>Echte connectie:</strong> Online gamen is eenzaam. Social gaming geeft je
              échte samenspel. Je hoort je vrienden lachen, je voelt de spanning.
            </p>
            <p>
              <strong>Niet niche:</strong> Gaming voelde vroeger alleen voor gamers. Social gaming
              haalt het uit die niche. Het is voor iedereen.
            </p>
            <p>
              <strong>Generatieoverschrijdend:</strong> Ouders spelen met kinderen, opa speelt
              mee. Allemaal mogelijk.
            </p>

            <h2>Social gaming vs online gamen</h2>
            <p>
              <strong>Online gamen:</strong> Thuis, alleen, via netwerk met vrienden. Chill, geen
              spanning, flexibel.
            </p>
            <p>
              <strong>Social gaming:</strong> Bij een venue, samen, live interactie. Energie,
              adrenaline, herinneringen.
            </p>
            <p>
              Beiden zijn leuk, maar social gaming voelt veel meer als échte samenbeleving.
            </p>

            <h2>Social gaming vs arcade</h2>
            <p>
              Arcade games zijn 1v1 of je-voor-jezelf. Social gaming is samen spelen, teamwork,
              wedstrijden als groep.
            </p>
            <p>
              Arcade voelt meer als "iedereen doet zijn ding", social gaming voelt als "we spelen
              echt tegen/met elkaar".
            </p>

            <h2>Tips voor je eerste keer</h2>
            <ul>
              <li>
                <strong>Ga met vrienden:</strong> Eerste keer voelt beter met mensen die je kent.
              </li>
              <li>
                <strong>Zeg dat je niet gamer bent:</strong> Venues weten dit en stellen makkelijke
                games in.
              </li>
              <li>
                <strong>Laat je meenemen in competitie:</strong> Dat is waar het voelt. Je hoeft
                niet goed te zijn, je hoeft te spelen.
              </li>
              <li>
                <strong>Zorg voor hydratatie:</strong> Dit is energiek! Breng drinken mee of koop
                ter plaatse.
              </li>
            </ul>

            <h2>Hoe boek je?</h2>
            <p>
              Bij ClashRooms in Eindhoven:
            </p>
            <ol>
              <li>Ga naar clashrooms.nl/boeken</li>
              <li>Selecteer je groepgrootte</li>
              <li>Kies een moment dat past</li>
              <li>Vul je gegevens in</li>
              <li>Betaal</li>
              <li>Je bent geboekt!</li>
            </ol>

            <h2>Veel gestelde vragen</h2>
            <p>
              <strong>Kan ik ook solo spelen?</strong> Ja, maar het voelt minder leuk. Social
              gaming is echt bedoeld voor groepen.
            </p>
            <p>
              <strong>Kun je drinken/eten mee brengen?</strong> Meestal ja, maar check dit met de
              venue. Veel hebben ook drankjes.
            </p>
            <p>
              <strong>Wat als ik motion sick word van games?</strong> Check dit vooraf. Sommige
              games kunnen lastig zijn voor motion-sensitive mensen.
            </p>
            <p>
              <strong>Is dit alleen voor jongeren?</strong> Nee, alle leeftijden. We zien alles van
              10 tot 70 jaar.
            </p>

            <h2>Conclusie</h2>
            <p>
              Social gaming is game-changing (pun intended). Het is een échte manier om samen iets
              te beleven. Niet zomaar gamen, maar samengaming.
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
                team building ideeën
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
