import { memo } from "react";
import { navLinks, SITE } from "@/constants";
import { socialLinks } from "@/data/portfolio";
import Logo from "../assets/images/image.png";


const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0b0b0b]/80">
      <div className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex gap-3 items-center">
              <img
                src={Logo}
                width={42}
                height={42}
                alt="yash"
                className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10"
              />

              <a href="#home" className="text-2xl font-extrabold text-white" aria-label="Go to home">
                YASH <span className="text-red-500">PATEL</span>
              </a>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-luxury-muted">
              A premium dark portfolio for {SITE.name}, focused on React, TypeScript, Tailwind CSS, and refined frontend
              experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">Quick Links</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a key={link.id} href={link.href} className="text-sm text-luxury-muted transition hover:text-red-400">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">Connect</h3>
            <div className="mt-5 flex flex-wrap gap-3">
             
              {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className={`grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white/75 transition hover:-translate-y-1 ${hoverColor}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

            </div>
          </div>
        </div>

        <div className="mt-12 flex items-start flex-col gap-3 border-t border-white/[0.08] pt-6 text-sm text-luxury-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {SITE.name}. All Rights Reserved.</p>
          <p>Designed By the Yash Patel.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);




