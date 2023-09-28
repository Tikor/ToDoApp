"use client"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
    children: React.ReactNode,
    className?: string,
    key?: string
}

export default function PageWrapper({children, className="flex grow flex-col", key}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{rotate:90}}
        transition={{duration: 3}}
        className={className}
      >
          {children}
      </motion.div>
    </AnimatePresence>
)}