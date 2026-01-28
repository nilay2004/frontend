import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Navigating the digital landscape for success
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button 
              className="mt-8 rounded-xl bg-dark px-8 py-6 text-lg font-medium text-dark-foreground hover:bg-dark/90"
            >
              Book a consultation
            </Button>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full max-w-[500px]">
              {/* Abstract illustration using SVG shapes */}
              <svg
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                {/* Megaphone shape */}
                <path
                  d="M180 200L320 120V280L180 200Z"
                  fill="hsl(var(--primary))"
                  stroke="hsl(var(--dark))"
                  strokeWidth="3"
                />
                <ellipse cx="180" cy="200" rx="30" ry="50" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="3"/>
                
                {/* Floating elements */}
                <circle cx="380" cy="100" r="35" fill="hsl(var(--dark))" />
                <path d="M368 100L392 100M380 88L380 112" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                
                <circle cx="420" cy="180" r="30" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
                <path d="M410 180C410 175 415 170 420 170C425 170 430 175 430 180" stroke="hsl(var(--dark))" strokeWidth="2" fill="none"/>
                <circle cx="414" cy="175" r="2" fill="hsl(var(--dark))"/>
                <circle cx="426" cy="175" r="2" fill="hsl(var(--dark))"/>
                
                <circle cx="400" cy="280" r="28" fill="hsl(var(--dark))" />
                <path d="M390 275L400 285L410 275" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Star */}
                <path d="M100 100L105 115L120 115L108 125L113 140L100 130L87 140L92 125L80 115L95 115L100 100Z" fill="hsl(var(--dark))"/>
                
                {/* Hand illustration */}
                <g transform="translate(60, 150)">
                  <path d="M0 80C10 60 30 50 50 50C60 30 80 20 100 30C110 10 130 0 150 10C170 20 180 40 175 60C190 70 200 90 195 110C190 130 170 145 150 145L50 145C30 145 10 130 0 110V80Z" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
                </g>

                {/* Phone shape */}
                <rect x="280" y="180" width="60" height="100" rx="8" fill="hsl(var(--dark))"/>
                <rect x="285" y="190" width="50" height="75" rx="4" fill="white"/>
                <circle cx="310" cy="275" r="4" fill="white" opacity="0.5"/>
                
                {/* S and N circles */}
                <circle cx="340" cy="230" r="25" fill="hsl(var(--primary))" stroke="hsl(var(--dark))" strokeWidth="2"/>
                <text x="340" y="238" textAnchor="middle" fill="hsl(var(--dark))" fontSize="20" fontWeight="bold">S</text>
                
                <circle cx="370" cy="260" r="25" fill="hsl(var(--dark))"/>
                <text x="370" y="268" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">N</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
