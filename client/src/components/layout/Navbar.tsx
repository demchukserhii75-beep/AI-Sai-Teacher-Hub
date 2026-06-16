import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import BrandMark from '../visual/BrandMark';

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

interface NavbarProps {
  items?: NavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

/**
 * Floating glass "dock" navigation.
 * - Detached, frosted-glass pill that hovers below the top edge.
 * - A magnetic active indicator (shared layoutId) physically slides between items.
 * - Shrinks slightly once the page is scrolled.
 * - Animated avatar menu with logout.
 */
export default function Navbar({ items = [], activeId, onSelect }: NavbarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the avatar menu on outside-click.
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [menuOpen]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name
    ? user.name.trim().split(/\s+/).slice(0, 2).map((n) => n[0]).join('').toUpperCase()
    : '?';

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: scrolled ? 8 : 16,
          opacity: 1,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className={`glass flex items-center gap-1 rounded-full px-2 py-2 ${
          scrolled ? 'shadow-glass-lg' : 'shadow-glass'
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => navigate(user ? '/dashboard' : '/')}
          className="group flex items-center rounded-full px-2.5 py-1.5 transition-transform active:scale-95"
          aria-label="Início"
        >
          <span className="transition-transform duration-300 group-hover:scale-105">
            <BrandMark compact />
          </span>
          <span className="ml-2 hidden font-display text-base font-extrabold tracking-tight md:inline">
            AI<span className="text-gradient">·</span>SAI
          </span>
        </button>

        {/* Nav items with sliding magnetic indicator */}
        {items.length > 0 && (
          <div className="mx-1 hidden h-7 w-px bg-ink/10 sm:block" />
        )}
        <ul className="flex items-center gap-0.5">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <motion.button
                  onClick={() => onSelect?.(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                  className={`relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                    active ? 'text-white' : 'text-ink/60 hover:text-ink'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="dock-active-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-brand-gradient shadow-glow-sm"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10 grid place-items-center">{item.icon}</span>
                  <span className="relative z-10 hidden sm:inline">{item.label}</span>
                </motion.button>
              </li>
            );
          })}
        </ul>

        {/* User menu */}
        {user && (
          <>
            <div className="mx-1 hidden h-7 w-px bg-ink/10 sm:block" />
            <div className="relative" ref={menuRef}>
              <motion.button
                onClick={() => setMenuOpen((v) => !v)}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition-colors hover:bg-white/50"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-glow-sm">
                  {initials}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-ink/50 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
                />
              </motion.button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="glass absolute right-0 mt-3 w-60 origin-top-right rounded-2xl p-2 shadow-glass-lg"
                  >
                    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                        {initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-ink">{user.name}</p>
                        <p className="truncate text-xs text-ink/50">{user.email}</p>
                      </div>
                    </div>
                    {user.institution && (
                      <p className="px-3 pb-1.5 text-xs text-ink/45">{user.institution}</p>
                    )}
                    <div className="my-1 h-px bg-ink/10" />
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </motion.nav>
    </div>
  );
}
