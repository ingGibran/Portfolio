import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Code2, X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/constants';

// Skill images for decorative floating elements
const skillImages = [
    { src: '/skills/python.png', alt: 'Python' },
    { src: '/skills/GitHub.png', alt: 'GitHub' },
    { src: '/skills/fastapi.png', alt: 'FastAPI' },
    { src: '/skills/Linux.png', alt: 'Linux' },
    { src: '/skills/django.png', alt: 'Django' },
    { src: '/skills/PostgresSQL.png', alt: 'PostgreSQL' },
];

// Floating positions for contact section
const floatingPositions = [
    { top: '10%', left: '4%', size: 40, delay: 0 },
    { top: '25%', right: '5%', size: 36, delay: 0.5 },
    { top: '50%', left: '3%', size: 38, delay: 1 },
    { top: '70%', right: '4%', size: 42, delay: 1.5 },
    { top: '40%', right: '3%', size: 34, delay: 0.8 },
    { top: '85%', left: '5%', size: 36, delay: 2 },
];

const Contact = () => {
    const currentYear = new Date().getFullYear();
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [emailForm, setEmailForm] = useState({
        email: '',
        subject: '',
        message: ''
    });
    const [sendStatus, setSendStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailClick = (e) => {
        e.preventDefault();
        setIsEmailModalOpen(true);
        setSendStatus('idle');
        setErrorMessage('');
    };

    const handleCloseModal = () => {
        setIsEmailModalOpen(false);
        setEmailForm({ email: '', subject: '', message: '' });
        setSendStatus('idle');
        setErrorMessage('');
    };

    const handleSend = async () => {
        setSendStatus('loading');
        setErrorMessage('');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
            const response = await fetch(`${apiUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_visitor: emailForm.email,
                    subject: emailForm.subject || 'Contact from Portfolio',
                    message: emailForm.message
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const data = await response.json();
            setSendStatus('success');

            // Auto close after 3 seconds on success
            setTimeout(() => {
                handleCloseModal();
            }, 3000);

        } catch (error) {
            setSendStatus('error');
            setErrorMessage('Failed to send message. Please try again.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <footer id="contact" className="py-20 lg:py-32 bg-white border-t border-slate-200 relative overflow-hidden">
            {/* Floating Skill Images */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {skillImages.map((image, index) => {
                    const position = floatingPositions[index % floatingPositions.length];
                    return (
                        <motion.div
                            key={image.alt}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 0.12, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: position.delay,
                            }}
                            style={{
                                position: 'absolute',
                                top: position.top,
                                left: position.left,
                                right: position.right,
                                width: position.size,
                                height: position.size,
                            }}
                            className="transition-all duration-1000"
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                animate={{
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 3.5 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>

            <div className="section-container relative z-10">
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
                            onClick={sendStatus === 'loading' ? undefined : handleCloseModal}
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
                                {/* Success State */}
                                {sendStatus === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-8 text-center"
                                    >
                                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-emerald-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600">
                                            Thank you for reaching out. I'll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        {/* Header */}
                                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                                            <h3 className="text-lg font-bold text-slate-900">
                                                Send <span className="text-accent-500">Email</span>
                                            </h3>
                                            <button
                                                onClick={handleCloseModal}
                                                disabled={sendStatus === 'loading'}
                                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 
                                   rounded-lg transition-colors disabled:opacity-50"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Form */}
                                        <div className="p-6 space-y-4">
                                            {/* Error Message */}
                                            {sendStatus === 'error' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                                                >
                                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                                    <span>{errorMessage}</span>
                                                </motion.div>
                                            )}

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
                                                    disabled={sendStatus === 'loading'}
                                                    placeholder="your.email@example.com"
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl
                                     text-slate-800 placeholder-slate-400
                                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     transition-all duration-200"
                                                />
                                            </div>

                                            {/* Subject Input */}
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={emailForm.subject}
                                                    onChange={handleInputChange}
                                                    disabled={sendStatus === 'loading'}
                                                    placeholder="What's this about?"
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl
                                     text-slate-800 placeholder-slate-400
                                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                     disabled:opacity-50 disabled:cursor-not-allowed
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
                                                    disabled={sendStatus === 'loading'}
                                                    rows={4}
                                                    placeholder="Write your message here..."
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl
                                     text-slate-800 placeholder-slate-400 resize-none
                                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     transition-all duration-200"
                                                />
                                            </div>
                                        </div>

                                        {/* Footer Buttons */}
                                        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
                                            <button
                                                onClick={handleCloseModal}
                                                disabled={sendStatus === 'loading'}
                                                className="px-5 py-2.5 text-slate-700 font-medium rounded-lg
                                   border border-slate-300 hover:bg-slate-100
                                   disabled:opacity-50 disabled:cursor-not-allowed
                                   transition-all duration-200"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleSend}
                                                disabled={!emailForm.email || !emailForm.message || sendStatus === 'loading'}
                                                className="flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white 
                                   font-medium rounded-lg hover:bg-primary-600
                                   disabled:opacity-50 disabled:cursor-not-allowed
                                   transition-all duration-200 min-w-[100px] justify-center"
                                            >
                                                {sendStatus === 'loading' ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Contact;
