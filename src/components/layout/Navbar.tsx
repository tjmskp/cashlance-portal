import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { APP_NAME, mainNavItems } from "@/lib/constants";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle page navigation - close mobile menu
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 300,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3
      }
    }),
    exit: { opacity: 0, y: -10 }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "py-4"
      } ${className}`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-50">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-gradient dark:text-gradient-dark">{APP_NAME}</span>
            </motion.div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {mainNavItems.map((item, index) => (
            <Button
              key={index}
              variant={location.pathname === item.href ? "secondary" : "ghost"}
              asChild
              className="font-medium"
            >
              <Link to={item.href}>{item.title}</Link>
            </Button>
          ))}
        </nav>

        {/* Right Side - Theme Toggle & Login */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <Button className="hidden md:flex ml-2 cashlance-button">
            <Link to="/login">Log In</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.nav 
              className="fixed top-0 right-0 bottom-0 w-[70%] max-w-[300px] glass-card rounded-l-xl p-6 pt-24 overflow-y-auto"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col gap-2">
                {mainNavItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    custom={index} 
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Button
                      variant={location.pathname === item.href ? "secondary" : "ghost"}
                      asChild
                      className="w-full justify-start font-medium text-lg py-4"
                    >
                      <Link to={item.href}>{item.title}</Link>
                    </Button>
                  </motion.div>
                ))}
                
                <motion.div 
                  custom={mainNavItems.length} 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-4"
                >
                  <Button className="w-full cashlance-button py-5 mt-2">
                    <Link to="/login">Log In</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
