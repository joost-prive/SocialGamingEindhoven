interface ComparisonRow {
  criterion: string;
  socialGaming: boolean;
  escapeRoom: boolean;
  bowling: boolean;
  lasergamen: boolean;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  title?: string;
}

export default function ComparisonTable({
  rows,
  title = 'Vergelijking van groepsactiviteiten',
}: ComparisonTableProps) {
  const CheckMark = () => (
    <span className="inline-flex items-center justify-center w-6 h-6 bg-accent bg-opacity-20 rounded">
      <span className="text-accent font-bold">✓</span>
    </span>
  );

  const CrossMark = () => (
    <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 rounded">
      <span className="text-gray-500 font-bold">✗</span>
    </span>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {title && (
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            {title}
          </h2>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-4 text-left font-semibold text-gray-900">
                  Criterium
                </th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900">
                  <span className="block text-sm">Social Gaming</span>
                  <span className="block text-xs font-normal text-accent">
                    (ClashRooms)
                  </span>
                </th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900">
                  Escape Room
                </th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900">
                  Bowling
                </th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900">
                  Lasergamen
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-4 font-medium text-gray-900">
                    {row.criterion}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.socialGaming ? <CheckMark /> : <CrossMark />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.escapeRoom ? <CheckMark /> : <CrossMark />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.bowling ? <CheckMark /> : <CrossMark />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.lasergamen ? <CheckMark /> : <CrossMark />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
