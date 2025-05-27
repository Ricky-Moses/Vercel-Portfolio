import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Animation = ({ children }) => {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animation