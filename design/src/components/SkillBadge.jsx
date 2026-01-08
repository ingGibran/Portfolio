import { motion } from 'framer-motion';

const SkillBadge = ({ skill, delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 bg-white text-slate-800 text-sm font-medium rounded-lg
                 border border-slate-200 hover:border-primary-400 hover:text-primary-600
                 transition-all duration-200 cursor-default shadow-sm"
        >
            {skill}
        </motion.span>
    );
};

export default SkillBadge;
