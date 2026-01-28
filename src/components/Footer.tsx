import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const footerLinks = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const Footer = () => {
  return (
    <footer className="rounded-t-[2.5rem] bg-dark pt-12 md:pt-16">
      <div className="container">
        {/* Top Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 17.2L17.2 1L33.4 17.2L17.2 33.4L1 17.2Z" fill="white"/>
              <path d="M6.6 17.2L17.2 6.6L27.8 17.2L17.2 27.8L6.6 17.2Z" fill="hsl(var(--primary))"/>
            </svg>
            <span className="text-2xl font-bold text-dark-foreground">Positivus</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 lg:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-dark-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-foreground text-dark transition-colors hover:bg-primary hover:text-foreground"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Newsletter Section */}
        <div className="mt-12 grid gap-8 border-t border-dark-foreground/20 pt-12 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <div>
            <span className="inline-block rounded-md bg-primary px-3 py-1 text-lg font-medium text-foreground">
              Contact us:
            </span>
            <div className="mt-6 space-y-4">
              <p className="text-lg text-dark-foreground">
                Email: info@positivus.com
              </p>
              <p className="text-lg text-dark-foreground">
                Phone: 555-567-8901
              </p>
              <p className="text-lg text-dark-foreground">
                Address: 1234 Main St<br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="rounded-xl bg-dark-foreground/10 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-xl border-dark-foreground/30 bg-transparent px-6 py-6 text-lg text-dark-foreground placeholder:text-dark-foreground/50"
              />
              <Button 
                className="rounded-xl bg-primary px-8 py-6 text-lg font-medium text-foreground hover:bg-primary/90"
              >
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-foreground/20 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-dark-foreground/70">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <a 
            href="#" 
            className="text-dark-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
