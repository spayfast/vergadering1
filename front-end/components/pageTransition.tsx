import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 200,
  },
};

const pageTransition = {
  type: 'spring',
  ease: 'anticipate',
  duration: 0.5,
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className='w-screen h-screen'
    >
      {children}
    </motion.div>
  </AnimatePresence>
);