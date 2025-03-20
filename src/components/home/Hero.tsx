
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, DollarSign, Gift } from "lucide-react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
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

  const featureVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const blurBgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.7, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Animated gradient blur backgrounds */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cashlance-300/30 rounded-full blur-[120px] opacity-0"
        variants={blurBgVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cashlance-400/20 rounded-full blur-[100px] opacity-0"
        variants={blurBgVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cashlance-100 dark:bg-cashlance-900/50 text-cashlance-800 dark:text-cashlance-200 text-sm font-medium"
            variants={itemVariants}
          >
            Start earning money today
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
            variants={itemVariants}
          >
            Complete tasks.<br />
            <span className="text-gradient dark:text-gradient-dark">Get paid.</span> It's that simple.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of users who earn money online with Cashlancing. Complete surveys, try new apps, and watch videos to earn rewards.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" variants={itemVariants}>
            <Button className="cashlance-button text-lg py-6 px-8" asChild>
              <Link to="/dashboard">
                Start Earning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" className="text-lg border-2 py-6 px-8" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {[
              { 
                icon: <DollarSign className="h-8 w-8 text-cashlance-400" />, 
                title: "Quick Payouts", 
                description: "Get paid within 24 hours of your request" 
              },
              { 
                icon: <Users className="h-8 w-8 text-cashlance-400" />, 
                title: "Refer & Earn", 
                description: "Earn 5% of what your referrals make, forever" 
              },
              { 
                icon: <Gift className="h-8 w-8 text-cashlance-400" />, 
                title: "Multiple Rewards", 
                description: "Choose from PayPal, crypto, gift cards and more" 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                className="glass-card p-6 flex flex-col items-center hover-scale"
              >
                <div className="bg-background p-3 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
