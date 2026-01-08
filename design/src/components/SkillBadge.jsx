import { motion } from 'framer-motion';

const SkillBadge = ({ skill, delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm font-medium rounded-lg
                 border border-slate-600/50 hover:border-primary-500/50 hover:text-primary-300
                 transition-colors duration-200 cursor-default"
        >
            {skill}
        </motion.span>
    );
};

export default SkillBadge;
