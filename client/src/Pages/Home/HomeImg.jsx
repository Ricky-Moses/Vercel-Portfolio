import { motion } from "framer-motion";
import Ricky from '../../Asset/rickymoses.jpg'


const HomeImg = () => {
    return (
        <motion.div
            className="home-img w-3/12 h-4/6 rounded-2xl overflow-hidden shadow-2xl "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .2, delay: 1.3 }}
        >
            <img
                width={600}
                height={800}
                loading="eager"
                decoding="async"
                className="w-full h-full bg-top object-cover" src={Ricky} alt="rickymoses.jpg" />
        </motion.div>
    )
}

export default HomeImg