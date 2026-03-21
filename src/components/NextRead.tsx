import Link from "next/link";

interface NextReadProps {
  items: { href: string; title: string; description: string }[];
}

export default function NextRead({ items }: NextReadProps) {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-primary-800 mb-4">继续阅读</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
          >
            <div className="font-medium text-primary-700 group-hover:text-primary-800">
              {item.title} &rarr;
            </div>
            <div className="text-sm text-gray-500 mt-1">{item.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
