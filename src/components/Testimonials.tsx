import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote: "Positivus has transformed our digital marketing strategy. Their expertise in SEO and content creation has helped us reach new audiences and achieve remarkable growth. The dedication and creativity of their team is outstanding.",
    name: "Sarah Johnson",
    position: "CEO at TechStart Inc",
  },
  {
    quote: "Working with Positivus has been a game-changer for our business. Their data-driven approach and innovative strategies have significantly improved our ROI. We couldn't be happier with the results.",
    name: "Michael Chen",
    position: "Founder at GrowthLabs",
  },
  {
    quote: "The team at Positivus goes above and beyond. They're not just service providers; they're true partners in our success. Their insights and expertise have been invaluable to our marketing efforts.",
    name: "Emily Davis",
    position: "Marketing Manager at CloudSoft",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-10"
        >
          <h2 className="section-badge text-2xl md:text-3xl">Testimonials</h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-dark p-8 md:p-16">
          {/* Decorative bubbles */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/10" />
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="mx-auto max-w-3xl"
              >
                <div className="relative rounded-[2rem] border-2 border-primary bg-dark p-8 md:p-10">
                  {/* Speech bubble pointer */}
                  <div className="absolute -bottom-4 left-12 h-8 w-8 rotate-45 border-b-2 border-r-2 border-primary bg-dark" />
                  
                  <p className="text-lg leading-relaxed text-dark-foreground md:text-xl">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                <div className="mt-12 pl-8">
                  <p className="text-xl font-medium text-primary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="mt-1 text-dark-foreground/80">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full text-dark-foreground transition-colors hover:bg-dark-foreground/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? "bg-primary" 
                        : "bg-dark-foreground/30 hover:bg-dark-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full text-dark-foreground transition-colors hover:bg-dark-foreground/10"
                aria-label="Next testimonial"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
