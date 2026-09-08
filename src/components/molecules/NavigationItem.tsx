import Link from 'next/link';

export default function NavigationItem({ href, label, isActive = false, scrolled = true, onClick }: { href: string; label: string; isActive?: boolean; scrolled?: boolean; onClick?: () => void }) {
  return (
    <li>
      <Link href={href} onClick={onClick} className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 ${isActive ? 'text-primary-600 bg-primary-50' : scrolled ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50' : 'text-white/80 hover:text-white hover:bg-white/10'}`} aria-current={isActive ? 'page' : undefined}>
        {label}
      </Link>
    </li>
  );
}
