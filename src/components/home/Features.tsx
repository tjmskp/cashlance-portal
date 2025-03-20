
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Award, Zap, Gift, Users, Shield } from "lucide-react";

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  const features = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Offer Walls",
      description: "Explore dozens of offer walls with surveys, tasks, and videos to earn money."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Fast Rewards",
      description: "Complete tasks and get credited instantly. No waiting for your earnings."
    },
    {
      icon: <Gift className="h-10 w-10" />,
      title: "Multiple Withdrawals",
      description: "Cash out via PayPal, cryptocurrency, gift cards, and more options."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Referral Program",
      description: "Invite friends and earn 5% of their earnings for life. No limits."
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Achievements",
      description: "Earn badges and level up as you complete more tasks and reach milestones."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Payments",
      description: "Your data and earnings are always secure with our encrypted platform."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Blob background */}
      <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-cashlance-300/10 rounded-full blur-[120px] opacity-70" />
      
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cashlance-100 dark:bg-cashlance-900/50 text-cashlance-800 dark:text-cashlance-200 text-sm font-medium">
            Why choose Cashlancing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Packed with <span className="text-gradient dark:text-gradient-dark">everything</span> you need
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform offers multiple ways to earn, secure payments, and a user-friendly experience to maximize your online earnings.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover-scale"
            >
              <div className="bg-cashlance-100 dark:bg-cashlance-900/50 text-cashlance-600 dark:text-cashlance-300 p-3 rounded-2xl inline-block mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
