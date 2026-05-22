import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Aung-Khant", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/real-aungminkhant/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:aung.m.khant22@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-muted">
          Jonathan Aung © {year}
        </p>
        <div className="flex gap-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="link-quiet"
            >
              <Icon className="h-[1.125rem] w-[1.125rem]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
