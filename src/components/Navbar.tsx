import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import Logo from "../assets/images/image.png";

/* Types */

type NavLink = {
  id: string;
  label: string;
  href: string;
};

type NavMode = "desktop" | "mobile";

type DockNavItemProps = {
  link: NavLink;
  isActive: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
};

/* Dock Style Desktop Navigation Item */

const DockNavItem = ({
  link,
  isActive,
  mouseX,
}: DockNavItemProps) => {
  const itemRef = useRef<HTMLAnchorElement | null>(null);

  /*
   * Calculate distance between mouse and current nav item.
   */
  const mouseDistance = useTransform(mouseX, (value) => {
    const rect = itemRef.current?.getBoundingClientRect();

    if (!rect || !Number.isFinite(value)) {
      return 9999;
    }

    return value - rect.left - rect.width / 2;
  });

  /*
   * React Bits Dock-style magnification.
   *
   * Center      = 1.22
   * Near center = 1.04
   * Far away    = 1
   */
  const targetScale = useTransform(
    mouseDistance,
    [-180, -90, 0, 90, 180],
    [1, 1.04, 1.22, 1.04, 1]
  );

  /*
   * Spring makes the movement smooth and elastic.
   */
  const scale = useSpring(targetScale, {
    stiffness: 180,
    damping: 14,
    mass: 0.15,
  });

  return (
    <motion.a
      ref={itemRef}
      href={link.href}
      style={{
        scale,
        transformOrigin: "center bottom",
      }}
      className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive
          ? "text-red-400"
          : "text-white/70 hover:text-white"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {link.label}

      {isActive ? (
        <motion.span
          layoutId="active-nav"
          className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.75)]"
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        />
      ) : null}
    </motion.a>
  );
};

/* Navbar */

const Navbar = () => {
  /*
   * Convert navLinks to the type expected by this component.
   */
  const typedNavLinks = navLinks as NavLink[];

  const sectionIds = useMemo(
    () => typedNavLinks.map((link) => link.id),
    [typedNavLinks]
  );

  const activeSection = useActiveSection(sectionIds);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*
   * Shared mouse X value for desktop Dock animation.
   */
  const mouseX = useMotionValue<number>(Infinity);

  /* Scroll Detection */

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Escape Key */

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  /*  Render Navigation Links */

  const renderLinks = (mode: NavMode) =>
    typedNavLinks.map((link) => {
      const isActive = activeSection === link.id;

      /* -----------------------------------------------------
         Desktop
         Only animation is changed.
      ----------------------------------------------------- */

      if (mode === "desktop") {
        return (
          <DockNavItem
            key={link.id}
            link={link}
            isActive={isActive}
            mouseX={mouseX}
          />
        );
      }

      /* -----------------------------------------------------
         Mobile
         Existing design remains same.
      ----------------------------------------------------- */

      return (
        <a
          key={link.id}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
            isActive
              ? "bg-red-500/[0.12] text-red-400"
              : "text-white/75 hover:bg-white/[0.04] hover:text-white"
          }`}
          aria-current={isActive ? "page" : undefined}
        >
          {link.label}
        </a>
      );
    });

  /* JSX */

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.08] bg-luxury-black/75 shadow-luxury backdrop-blur-2xl"
          : "bg-luxury-black/40 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        {/*  Logo */}

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            width={42}
            height={42}
            alt="yash"
            className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10"
          />

          <a
            href="#home"
            className="text-xl font-extrabold tracking-normal text-white"
            aria-label="Go to home"
          >
            YASH<span className="text-red-600">PATEL</span>
          </a>
        </div>

        {/* Desktop Navigation */}

        <div
          className="hidden items-center gap-9 rounded-full border border-white/[0.07] bg-white/[0.03] px-7 py-2.5 lg:flex"
          onMouseMove={(event: MouseEvent<HTMLDivElement>) => {
            mouseX.set(event.clientX);
          }}
          onMouseLeave={() => {
            mouseX.set(Infinity);
          }}
        >
          {renderLinks("desktop")}
        </div>

        {/*  Hire Me */}

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-red-00 px-6 py-3 text-sm font-bold text-white shadow-redGlow transition duration-300 hover:bg-red-600 hover:shadow-redCard focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-luxury-black active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white transition hover:border-red-500/40 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 lg:hidden"
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mx-4 mb-4 overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d0d]/95 shadow-luxury backdrop-blur-2xl lg:hidden"
            initial={{
              opacity: 0,
              y: -12,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              y: -12,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <div className="grid gap-1 p-3">
              {renderLinks("mobile")}

              {/* Mobile Hire Me */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-2xl bg-white-600 px-4 py-3 text-center text-base font-bold text-white shadow-redGlow transition hover:bg-red-600"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default memo(Navbar);