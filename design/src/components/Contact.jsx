import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Code2, X, Send } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/constants';

const Contact = () => {
    const currentYear = new Date().getFullYear();
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [emailForm, setEmailForm] = useState({
        email: '',
        message: ''
    });

    const handleEmailClick = (e) => {
        e.preventDefault();
        setIsEmailModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEmailModalOpen(false);
        setEmailForm({ email: '', message: '' });
    };

    const handleSend = () => {
        // Create mailto link with the form data
        const subject = encodeURIComponent('Contact from Portfolio');
        const body = encodeURIComponent(`From: ${emailForm.email}\n\n${emailForm.message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
        handleCloseModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <footer id="contact" className="py-20 lg:py-32 bg-white border-t border-slate-200">
            <div className="section-container">
                {/* Section Header - Black + Orange */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">
                        <span className="text-slate-900">Get In </span>
                        <span className="text-accent-500">Touch</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {socialLinks.map((link, index) => {
                        const IconComponent = link.icon;
                        const isEmail = link.name === 'Email';

                        return (
                            <motion.a
                                key={link.name}
                                href={isEmail ? '#' : link.url}
                                onClick={isEmail ? handleEmailClick : undefined}
                                target={!isEmail && !link.url.startsWith('mailto:') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-xl
                           shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 group cursor-pointer"
                            >
                                <IconComponent className="w-5 h-5 text-slate-500 group-hover:text-primary-600 transition-colors" />
                                <span className="text-slate-800 group-hover:text-slate-900 font-medium transition-colors">
                                    {link.name}
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm"
                >
                    {/* Copyright */}
                    <div className="flex items-center gap-2">
                        <div className="p-1 bg-primary-500 rounded">
                            <Code2 className="w-3 h-3 text-white" />
                        </div>
                        <span>© {currentYear} {personalInfo.name.split(' ').slice(0, 2).join(' ')}. All rights reserved.</span>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-accent-500 fill-accent-500" />
                        <span>using React & Tailwind</span>
                    </div>
                </motion.div>
            </div>

            {/* Email Modal */}
            <AnimatePresence>
                {isEmailModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                         w-full max-w-md mx-4"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        Send <span className="text-accent-500">Email</span>
                                    </h3>
                                    <button
                                        onClick={handleCloseModal}
                                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 
                               rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Form */}
                                <div className="p-6 space-y-4">
                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={emailForm.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl
                                 text-slate-800 placeholder-slate-400
                                 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={emailForm.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            placeholder="Write your message here..."
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl
                                 text-slate-800 placeholder-slate-400 resize-none
                                 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                 transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                {/* Footer Buttons */}
                                <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
                                    <button
                                        onClick={handleCloseModal}
                                        className="px-5 py-2.5 text-slate-700 font-medium rounded-lg
                               border border-slate-300 hover:bg-slate-100
                               transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSend}
                                        disabled={!emailForm.email || !emailForm.message}
                                        className="flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white 
                               font-medium rounded-lg hover:bg-primary-600
                               disabled:opacity-50 disabled:cursor-not-allowed
                               transition-all duration-200"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Contact;
