import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: ["Search engine", "optimization"],
    variant: "light" as const,
    image: "seo",
  },
  {
    title: ["Pay-per-click", "advertising"],
    variant: "primary" as const,
    image: "ppc",
  },
  {
    title: ["Social Media", "Marketing"],
    variant: "dark" as const,
    image: "social",
  },
  {
    title: ["Email", "Marketing"],
    variant: "light" as const,
    image: "email",
  },
  {
    title: ["Content", "Creation"],
    variant: "primary" as const,
    image: "content",
  },
  {
    title: ["Analytics and", "Tracking"],
    variant: "dark" as const,
    image: "analytics",
  },
];

const ServiceIllustration = ({ type }: { type: string }) => {
  const illustrations: Record<string, JSX.Element> = {
    seo: (
      <svg viewBox="0 0 180 120" className="h-full w-full">
        <rect x="20" y="20" width="100" height="80" rx="8" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <rect x="30" y="35" width="60" height="8" rx="2" fill="hsl(var(--dark))"/>
        <rect x="30" y="50" width="40" height="6" rx="2" fill="hsl(var(--dark))" opacity="0.5"/>
        <rect x="30" y="62" width="50" height="6" rx="2" fill="hsl(var(--dark))" opacity="0.5"/>
        <circle cx="140" cy="50" r="25" fill="hsl(var(--dark))"/>
        <path d="M132 50L138 56L152 42" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    ppc: (
      <svg viewBox="0 0 180 120" className="h-full w-full">
        <rect x="40" y="10" width="80" height="100" rx="8" fill="white" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <rect x="50" y="25" width="60" height="50" rx="4" fill="hsl(var(--secondary))"/>
        <circle cx="80" cy="50" r="15" fill="hsl(var(--dark))"/>
        <path d="M75 50L78 53L86 45" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="55" y="82" width="50" height="12" rx="4" fill="hsl(var(--primary))"/>
      </svg>
    ),
    social: (
      <svg viewBox="0 0 180 120" className="h-full w-full">
        <circle cx="60" cy="60" r="35" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <circle cx="100" cy="40" r="25" fill="white" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <circle cx="130" cy="70" r="28" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <text x="55" y="65" fontSize="20" fontWeight="bold" fill="hsl(var(--dark))">♡</text>
        <text x="93" y="45" fontSize="16" fontWeight="bold" fill="hsl(var(--dark))">@</text>
        <text x="122" y="76" fontSize="20" fontWeight="bold" fill="hsl(var(--dark))">#</text>
      </svg>
    ),
    email: (
      <svg viewBox="0 0 180 120" className="h-full w-full">
        <rect x="30" y="25" width="120" height="70" rx="8" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <path d="M30 35L90 70L150 35" stroke="hsl(var(--dark))" strokeWidth="2" fill="none"/>
        <circle cx="130" cy="85" r="20" fill="hsl(var(--dark))"/>
        <path d="M125 85L128 88L136 80" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    content: (
      <svg viewBox="0 0 180 120" className="h-full w-full">
        <rect x="25" y="15" width="90" height="90" rx="8" fill="white" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <rect x="35" y="25" width="70" height="45" rx="4" fill="hsl(var(--secondary))"/>
        <polygon points="65,40 80,50 65,60" fill="hsl(var(--dark))"/>
        <rect x="35" y="78" width="50" height="6" rx="2" fill="hsl(var(--dark))" opacity="0.5"/>
        <rect x="35" y="88" width="35" height="6" rx="2" fill="hsl(var(--dark))" opacity="0.3"/>
        <circle cx="140" cy="60" r="25" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <text x="132" y="68" fontSize="24" fill="hsl(var(--dark))">✎</text>
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 180 120" className="h-full w-full">
        <rect x="20" y="20" width="100" height="80" rx="8" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <rect x="35" y="55" width="12" height="30" rx="2" fill="hsl(var(--dark))"/>
        <rect x="55" y="40" width="12" height="45" rx="2" fill="hsl(var(--dark))"/>
        <rect x="75" y="50" width="12" height="35" rx="2" fill="hsl(var(--dark))"/>
        <rect x="95" y="35" width="12" height="50" rx="2" fill="hsl(var(--dark))"/>
        <circle cx="140" cy="60" r="28" fill="white" stroke="hsl(var(--dark))" strokeWidth="2"/>
        <path d="M130 60L140 60L140 45" stroke="hsl(var(--dark))" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  };
  
  return illustrations[type] || null;
};

const ServiceCard = ({ 
  title, 
  variant, 
  image,
  index 
}: { 
  title: string[]; 
  variant: "light" | "primary" | "dark";
  image: string;
  index: number;
}) => {
  const cardStyles = {
    light: "bg-secondary border-2 border-dark shadow-[0_6px_0_0_hsl(var(--dark))]",
    primary: "bg-primary border-2 border-dark shadow-[0_6px_0_0_hsl(var(--dark))]",
    dark: "bg-dark border-2 border-dark shadow-[0_6px_0_0_hsl(var(--primary))]",
  };
  
  const titleBgStyles = {
    light: "bg-primary",
    primary: "bg-background",
    dark: "bg-background",
  };
  
  const textStyles = {
    light: "text-foreground",
    primary: "text-foreground",
    dark: "text-dark-foreground",
  };
  
  const linkStyles = {
    light: "bg-dark text-dark-foreground",
    primary: "bg-dark text-dark-foreground",
    dark: "bg-primary text-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-[2.5rem] p-8 transition-transform hover:-translate-y-1 md:p-10 ${cardStyles[variant]}`}
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            {title.map((line, i) => (
              <span 
                key={i}
                className={`inline-block w-fit rounded-md px-2 py-1 text-xl font-medium md:text-2xl ${titleBgStyles[variant]}`}
              >
                {line}
              </span>
            ))}
          </div>
          
          <a 
            href="#" 
            className={`mt-4 inline-flex items-center gap-2 text-lg font-medium transition-opacity hover:opacity-80 ${textStyles[variant]}`}
          >
            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${linkStyles[variant]}`}>
              <ArrowUpRight size={20} />
            </span>
            <span className="underline-offset-4 hover:underline">Learn more</span>
          </a>
        </div>
        
        <div className="h-32 w-40 md:h-36 md:w-48">
          <ServiceIllustration type={image} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-10"
        >
          <h2 className="section-badge text-2xl md:text-3xl">Services</h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              variant={service.variant}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
