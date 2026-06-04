import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Social Gaming Eindhoven',
  description:
    'Tips, gidsen en inzichten over social gaming, groepsactiviteiten en team building in Eindhoven.',
};

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Top 10 groepsactiviteiten in Eindhoven (2025)',
    slug: 'top-10-groepsactiviteiten-eindhoven',
    excerpt:
      'Wat zijn de beste groepsactiviteiten in Eindhoven? Van social gaming tot escape rooms, bowling tot paintball. Hier is onze complete top 10 met voor- en nadelen.',
    date: '13 mei 2025',
    readTime: '8 min',
  },
  {
    title: 'Escape room vs. social gaming: wat is leuker?',
    slug: 'escape-room-vs-social-gaming',
    excerpt:
      'Beide zijn populair, maar wat is het verschil? En waarom kiezen meer en meer Eindhovenaren voor social gaming? Eerlijke vergelijking hier.',
    date: '10 mei 2025',
    readTime: '7 min',
  },
  {
    title: 'Origineel bedrijfsuitje in Eindhoven: 5 ideeën die wél werken',
    slug: 'origineel-bedrijfsuitje-eindhoven',
    excerpt:
      'Klaar met dezelfde saaie bedrijfsuitjes? Hier zijn 5 ideeën voor team building dat écht impact heeft. Social gaming is één van ze!',
    date: '8 mei 2025',
    readTime: '6 min',
  },
  {
    title: 'Wat is social gaming? De complete gids',
    slug: 'wat-is-social-gaming-gids',
    excerpt:
      'Alles wat je moet weten over social gaming. Wat is het, waarom is het trending, wie kan het doen, hoe boeking werkt. Complete gids.',
    date: '5 mei 2025',
    readTime: '10 min',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-max">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Tips, gidsen en inzichten over social gaming, groepsactiviteiten en team building
            in Eindhoven.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} leestijd</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-3 hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent font-semibold hover:text-accent-dark transition-colors inline-block"
                >
                  Lees meer →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-black mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-gray-700 mb-6">
            Volg ClashRooms op sociale media voor tips, updates en spelaanbiedingen.
          </p>
          <a
            href="https://clashrooms.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Bezoek ClashRooms
          </a>
        </div>
      </section>
    </>
  );
}
