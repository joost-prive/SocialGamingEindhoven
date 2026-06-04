import CTAButton from './CTAButton';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  alignment?: 'left' | 'center';
}

export default function HeroSection({
  title,
  subtitle,
  ctaLabel = 'Boek bij ClashRooms',
  ctaHref = 'https://clashrooms.nl/boeken',
  alignment = 'center',
}: HeroSectionProps) {
  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <section className={`section-padding bg-gradient-to-br from-gray-50 to-gray-100 ${alignClass}`}>
      <div className="container-max">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
          {subtitle}
        </p>
        {ctaLabel && ctaHref && (
          <CTAButton href={ctaHref} label={ctaLabel} />
        )}
      </div>
    </section>
  );
}
