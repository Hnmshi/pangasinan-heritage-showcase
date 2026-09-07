import Link from 'next/link';

export default function NavigationItem({ href, label, isActive = false, onClick }: { href: string; label: string; isActive?: boolean; onClick?: () => void }) {
  return (
    <li>
      <Link href={href} onClick={onClick} className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'}`} aria-current={isActive ? 'page' : undefined}>
        {label}
      </Link>
    </li>
  );
}
