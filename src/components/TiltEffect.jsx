import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const TiltEffect = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      style={{
        perspective: '1000px',
        rotateX,
        rotateY,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltEffect;
