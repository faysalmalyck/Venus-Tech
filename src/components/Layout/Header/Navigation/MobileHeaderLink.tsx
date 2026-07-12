import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onNavigate?: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({
  item,
  onNavigate,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();
  const itemPath = item.href.split("#")[0];
  const isActive =
    path === itemPath ||
    item.submenu?.some((subItem) => path === subItem.href.split("#")[0]);

  return (
    <div className="relative block w-full">
      {item.submenu ? (
        <button
          type="button"
          onClick={handleToggle}
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${isActive ? 'bg-gradient-to-r from-primary to-Sky-blue-mist text-white shadow-lg shadow-primary/25 dark:text-white' : ''}`}
        >
          {item.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? "rotate-180" : ""}`}
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        </button>
      ) : (
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${isActive ? 'bg-gradient-to-r from-primary to-Sky-blue-mist text-white shadow-lg shadow-primary/25 dark:text-white' : ''}`}
        >
          {item.label}
        </Link>
      )}
      {submenuOpen && item.submenu && (
        <div className="mt-2 w-full rounded-2xl border border-slate-950/10 bg-white/80 p-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onNavigate}
              className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                path === subItem.href.split("#")[0]
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
