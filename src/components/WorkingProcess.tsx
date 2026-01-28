import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description: "Our team conducts thorough market research and competitive analysis to develop a comprehensive strategy tailored to your business goals and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the developed strategy with precision, implementing campaigns across chosen channels while maintaining consistent communication with your team.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor campaign performance, analyze data, and make real-time adjustments to optimize results and maximize your ROI.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description: "Regular detailed reports keep you informed about campaign progress, key metrics, and insights, ensuring transparency and alignment with your goals.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description: "Based on performance data and market changes, we continuously refine and improve strategies to ensure sustained growth and success.",
  },
];

const ProcessItem = ({ 
  step, 
  isOpen, 
  onToggle,
  index 
}: { 
  step: typeof processSteps[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`rounded-[2.5rem] border-2 border-dark p-6 transition-all md:p-8 ${
        isOpen 
          ? "bg-primary shadow-[0_6px_0_0_hsl(var(--dark))]" 
          : "bg-secondary shadow-[0_6px_0_0_hsl(var(--dark))]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-3xl font-bold text-foreground md:text-5xl">
            {step.number}
          </span>
          <span className="text-left text-lg font-medium text-foreground md:text-2xl">
            {step.title}
          </span>
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dark md:h-14 md:w-14 ${
          isOpen ? "bg-background" : "bg-secondary"
        }`}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 border-t-2 border-dark pt-6">
              <p className="text-base text-foreground md:text-lg">
                {step.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-10"
        >
          <h2 className="section-badge text-2xl md:text-3xl">Our Working Process</h2>
          <p className="max-w-md text-lg text-muted-foreground">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {processSteps.map((step, index) => (
            <ProcessItem
              key={step.number}
              step={step}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
