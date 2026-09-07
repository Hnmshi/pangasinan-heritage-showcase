'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', duration = 0.5, className = '' }: FadeInProps) {
  const offsets = { up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 }, none: {} };
  return (
    <motion.div initial={{ opacity: 0, ...offsets[direction] }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }} className={className}>
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className={className}>
      {children}
    </motion.div>
  );
}
