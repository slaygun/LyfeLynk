import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function AnimatedSection({ children, className, ...props }) {
  return (
    <motion.section
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props} // Pass additional props (e.g., style)
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
