import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Social Gaming Eindhoven
            </h3>
            <p className="text-sm">
              De gids voor social gaming in Eindhoven. Samen spelen, samen beleven.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Pagina's</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/wat-is-social-gaming"
                  className="hover:text-accent transition-colors"
                >
                  Wat is social gaming?
                </Link>
              </li>
              <li>
                <Link
                  href="/groepsactiviteiten-eindhoven"
                  className="hover:text-accent transition-colors"
                >
                  Groepsactiviteiten
                </Link>
              </li>
              <li>
                <Link
                  href="/bedrijfsuitje-eindhoven"
                  className="hover:text-accent transition-colors"
                >
                  Bedrijfsuitje
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Blog</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/top-10-groepsactiviteiten-eindhoven"
                  className="hover:text-accent transition-colors"
                >
                  Top 10 groepsactiviteiten
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/escape-room-vs-social-gaming"
                  className="hover:text-accent transition-colors"
                >
                  Escape room vs. social gaming
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/origineel-bedrijfsuitje-eindhoven"
                  className="hover:text-accent transition-colors"
                >
                  Origineel bedrijfsuitje
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">ClashRooms</h4>
            <p className="text-sm mb-4">
              Deze website is een initiatief van ClashRooms, dé social gaming locatie in
              Eindhoven.
            </p>
            <a
              href="https://clashrooms.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors text-sm font-semibold"
            >
              Bezoek ClashRooms →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Social Gaming Eindhoven. Powered by ClashRooms.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="/sitemap.xml"
                className="hover:text-accent transition-colors"
              >
                Sitemap
              </a>
              <a
                href="/robots.txt"
                className="hover:text-accent transition-colors"
              >
                Robots
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
