"use client"
import { motion} from "framer-motion"

type Props = {
    children: React.ReactNode,
    className?: string,
    key?: string
}

export default function PageWrapper({children, className="flex grow flex-col"}: Props) {
  return (
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.4}}
        className={className}
      >
          {children}
      </motion.div>
)}