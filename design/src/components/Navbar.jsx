import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '../data/constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : ''
                }`}
        >
            <nav className="section-container py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-2 text-slate-100 font-bold text-lg hover:text-primary-400 transition-colors"
                    >
                        <Code2 className="w-6 h-6 text-primary-400" />
                        <span className="hidden sm:inline">AGZ</span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-slate-400 hover:text-primary-400 text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-primary-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <ul className="py-4 space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="block text-slate-400 hover:text-primary-400 text-sm font-medium 
                                 py-2 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Navbar;
