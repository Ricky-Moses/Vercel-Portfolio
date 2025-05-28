import { motion } from "framer-motion";
import BlankAnimation from "../Components/BlankAnimation";
import HomeImg from "./Home/HomeImg";
import HomeTitle from "./Home/HomeTitle";

const Home = () => {
  return (
    <div>
      <BlankAnimation />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: .6, delay: 1 }}
      >
        <div className="home w-dvw h-dvh">
          <div className="back-clip absolute inset-0"></div>
          <div className="home-content w-full h-full flex flex-col lg:flex-row items-center xs:justify-center lg:justify-between absolute inset-0 !p-1 md:!px-10">
            <HomeImg />
            <HomeTitle />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home