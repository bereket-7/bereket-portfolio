"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, delay } from "framer-motion";

const PageTransition = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{ opacity: 1}}
            animate={{ opacity: 0,
                transition:{delay: 1, duration:0.4, ease: "easeInOut" },
            }}

           />

        </div>
        {children}
    </AnimatePresence>
  )
}

export default PageTransition;