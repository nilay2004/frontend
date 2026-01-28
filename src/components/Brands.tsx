import { motion } from "framer-motion";

const brands = [
  { name: "amazon", logo: "amazon" },
  { name: "dribbble", logo: "dribbble" },
  { name: "hubspot", logo: "hubspot" },
  { name: "notion", logo: "notion" },
  { name: "netflix", logo: "netflix" },
  { name: "zoom", logo: "zoom" },
];

const BrandLogo = ({ name }: { name: string }) => {
  const logos: Record<string, JSX.Element> = {
    amazon: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto text-foreground">
        <text x="0" y="28" fontSize="24" fontWeight="bold" fill="currentColor">amazon</text>
        <path d="M50 32 Q60 38 70 32" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    dribbble: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto text-foreground">
        <circle cx="18" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M6 25C12 22 24 22 30 25" stroke="currentColor" strokeWidth="2" fill="none"/>
        <text x="38" y="26" fontSize="16" fontWeight="600" fill="currentColor">dribbble</text>
      </svg>
    ),
    hubspot: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto text-foreground">
        <circle cx="15" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="23" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="2"/>
        <circle cx="38" cy="20" r="5" fill="currentColor"/>
        <text x="48" y="26" fontSize="15" fontWeight="600" fill="currentColor">HubSpot</text>
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto text-foreground">
        <rect x="5" y="8" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="10" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="19" x2="20" y2="19" stroke="currentColor" strokeWidth="1.5"/>
        <text x="32" y="26" fontSize="17" fontWeight="600" fill="currentColor">Notion</text>
      </svg>
    ),
    netflix: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto text-foreground">
        <text x="0" y="28" fontSize="20" fontWeight="bold" fill="currentColor" fontStyle="italic">NETFLIX</text>
      </svg>
    ),
    zoom: (
      <svg viewBox="0 0 100 40" className="h-8 w-auto text-foreground">
        <rect x="3" y="10" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M27 16L35 12V28L27 24" stroke="currentColor" strokeWidth="2" fill="none"/>
        <text x="42" y="26" fontSize="18" fontWeight="bold" fill="currentColor">zoom</text>
      </svg>
    ),
  };
  
  return logos[name] || null;
};

const Brands = () => {
  return (
    <section className="border-y border-border py-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:justify-between"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grayscale transition-all duration-300 hover:grayscale-0"
            >
              <BrandLogo name={brand.logo} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
