import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-secondary p-8 md:p-16"
        >
          <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground md:text-4xl">
                Let's make things happen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>
            </div>
            <Button 
              className="rounded-xl bg-dark px-8 py-6 text-lg font-medium text-dark-foreground hover:bg-dark/90"
            >
              Get your free proposal
            </Button>
          </div>

          {/* Decorative illustration */}
          <div className="absolute -right-20 -top-20 hidden h-80 w-80 lg:block">
            <svg viewBox="0 0 300 300" className="h-full w-full">
              <g opacity="0.8">
                <circle cx="150" cy="100" r="60" fill="none" stroke="hsl(var(--dark))" strokeWidth="2" strokeDasharray="8 8"/>
                <circle cx="200" cy="180" r="40" fill="hsl(var(--primary))" opacity="0.5"/>
                <rect x="80" y="160" width="80" height="80" rx="12" fill="none" stroke="hsl(var(--dark))" strokeWidth="2"/>
                {/* Stars */}
                <path d="M250 80L253 90L263 90L255 97L258 107L250 100L242 107L245 97L237 90L247 90L250 80Z" fill="hsl(var(--dark))"/>
                <path d="M100 50L102 56L108 56L103 60L105 66L100 62L95 66L97 60L92 56L98 56L100 50Z" fill="hsl(var(--dark))" opacity="0.5"/>
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
