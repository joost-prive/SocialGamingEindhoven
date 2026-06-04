interface CTAButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({
  href,
  label,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const baseClasses =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary';

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${className}`}
    >
      {label}
    </a>
  );
}
