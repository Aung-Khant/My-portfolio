import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Aung-Khant", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/real-aungminkhant/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:aung.m.khant22@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          Designed & Built by{" "}
          <span className="font-semibold text-primary">Aung Min Khant</span> ©{" "}
          {year}
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
