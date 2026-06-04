interface TestimonialCardProps {
  quote: string;
  name: string;
  context: string;
}

export default function TestimonialCard({
  quote,
  name,
  context,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-accent text-lg">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">"{quote}"</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{context}</p>
      </div>
    </div>
  );
}
