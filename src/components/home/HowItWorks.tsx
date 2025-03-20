
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up for free in less than 30 seconds. No credit card required."
    },
    {
      number: "02",
      title: "Choose Tasks",
      description: "Browse through hundreds of surveys, offers, and tasks available to you."
    },
    {
      number: "03",
      title: "Complete & Earn",
      description: "Finish tasks and see your balance increase instantly."
    },
    {
      number: "04",
      title: "Cash Out",
      description: "Withdraw your earnings to PayPal, cryptocurrency, or gift cards."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] bg-cashlance-400/10 rounded-full blur-[120px] opacity-70" />
      
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cashlance-100 dark:bg-cashlance-900/50 text-cashlance-800 dark:text-cashlance-200 text-sm font-medium">
            Simple process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How <span className="text-gradient dark:text-gradient-dark">Cashlancing</span> works
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started is easy. Follow these simple steps and start earning in minutes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover-scale"
            >
              <div className="text-4xl font-bold text-cashlance-300 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="cashlance-button text-lg py-6 px-8" asChild>
            <Link to="/dashboard">
              Start Earning Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
