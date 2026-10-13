
import { memo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {AlertCircle,CheckCircle2,Send} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { contactItems, socialLinks } from "@/data/portfolio";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

type Toast = {
  type: "success" | "error";
  message: string;
} | null;

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [toast, setToast] =
    useState<Toast>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email =
        "Please enter a valid email.";
    }

    if (form.subject.trim().length < 3) {
      nextErrors.subject =
        "Please enter a subject.";
    }

    if (form.message.trim().length < 12) {
      nextErrors.message =
        "Message should be at least 12 characters.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (
    field: keyof ContactForm,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const phoneNumber = "91 8320631943"; // apna WhatsApp number
    const text = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // WhatsApp open karega
    window.open(url, "_blank");

    // ✅ Message send hone ke baad fields clear kar do
    setForm(initialForm);
    setErrors({});
    setToast({
      type: "success",
      message: "Your message has been sent successfully!",
    });
  };


  return (
    <section
      id="contact"
      className="scroll-mt-28 px-6 py-24 lg:py-10"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something premium"
          description="Have a project, internship opportunity, or collaboration idea? Send a message and start the conversation."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* CONTACT INFORMATION */}

          <motion.div
            initial={{
              opacity: 0,
              x: -34,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-6 shadow-luxury sm:p-8"
          >
            <h3 className="text-2xl font-bold text-white">
              Contact information
            </h3>

            <p className="mt-4 text-sm leading-7 text-luxury-muted">
              I am available for frontend work,
              React projects, UI implementation,
              and collaboration opportunities.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map(
                ({
                  label,
                  value,
                  href,
                  icon: Icon,
                }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-red-500/40 hover:bg-red-500/10"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-500/10 text-red-400 transition group-hover:bg-red-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                        {label}
                      </span>

                      <span className="mt-1 block break-all text-sm font-semibold text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                ),
              )}
            </div>

            

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className={`grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] 
                  bg-white/[0.04] text-white/75 transition hover:-translate-y-1 ${hoverColor}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONTACT FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 34,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-6 shadow-luxury sm:p-8"
            noValidate
          >
            {/* TOAST */}

            <AnimatePresence>
              {toast ? (
                <motion.div
                  className={`mb-6 flex items-start gap-3 rounded-[18px] border px-4 py-3 text-sm font-semibold ${toast.type === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                      : "border-red-500/30 bg-red-500/10 text-red-200"
                    }`}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                >
                  {toast.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}

                  <span>
                    {toast.message}
                  </span>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* NAME + EMAIL */}

            <div className="grid gap-5 sm:grid-cols-2">

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white">
                  Name
                </span>

                <input
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    updateField(
                      "name",
                      event.target.value,
                    )
                  }
                  aria-invalid={Boolean(
                    errors.name,
                  )}
                  className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 text-sm font-medium text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-red-500/10"
                  placeholder="Your name"
                />

                {errors.name ? (
                  <span className="mt-2 block text-xs font-semibold text-red-300">
                    {errors.name}
                  </span>
                ) : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white">
                  Email
                </span>

                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField(
                      "email",
                      event.target.value,
                    )
                  }
                  aria-invalid={Boolean(
                    errors.email,
                  )}
                  className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 text-sm font-medium text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-red-500/10"
                  placeholder="you@example.com"
                />

                {errors.email ? (
                  <span className="mt-2 block text-xs font-semibold text-red-300">
                    {errors.email}
                  </span>
                ) : null}
              </label>

            </div>

            {/* SUBJECT */}

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-white">
                Subject
              </span>

              <input
                type="text"
                value={form.subject}
                onChange={(event) =>
                  updateField(
                    "subject",
                    event.target.value,
                  )
                }
                aria-invalid={Boolean(
                  errors.subject,
                )}
                className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 text-sm font-medium text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-red-500/10"
                placeholder="Project inquiry"
              />

              {errors.subject ? (
                <span className="mt-2 block text-xs font-semibold text-red-300">
                  {errors.subject}
                </span>
              ) : null}
            </label>

            {/* MESSAGE */}

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-white">
                Message
              </span>

              <textarea
                value={form.message}
                onChange={(event) =>
                  updateField(
                    "message",
                    event.target.value,
                  )
                }
                aria-invalid={Boolean(
                  errors.message,
                )}
                className="min-h-40 w-full resize-y rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm font-medium leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-red-500/10"
                placeholder="Tell me about your project..."
              />

              {errors.message ? (
                <span className="mt-2 block text-xs font-semibold text-red-300">
                  {errors.message}
                </span>
              ) : null}
            </label>

            {/* SEND */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-4 text-sm font-bold text-white shadow-redGlow transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-redCard focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-luxury-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);