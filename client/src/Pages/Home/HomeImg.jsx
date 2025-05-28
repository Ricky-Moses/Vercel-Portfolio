import { motion } from "framer-motion";
import Ricky from '../../Asset/rickymoses.jpg'


const HomeImg = () => {
    return (
        <motion.div
            className="home-img avatar w-6/12 lg:w-3/12 h-[30%] lg:h-4/6 rounded-full lg:rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .2, delay: 1.3 }}
        >
            <img
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover" src={Ricky} alt="rickymoses.jpg" />
        </motion.div>
    )
}

export default HomeImg