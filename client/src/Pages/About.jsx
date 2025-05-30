import { motion } from "framer-motion";
import BlankAnimation from "../Components/BlankAnimation"
import AboutEdEx from "./About/AboutEdEx"
import AboutPersonal from "./About/AboutPersonal"
import AboutSkill from "./About/AboutSkill"
import AboutTitle from "./About/AboutTitle"

const About = () => {
  return (
    <div className="about max-w-dvw h-dvh">
      <BlankAnimation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: .6, delay: 1 }}
        className="flex flex-col gap-5">
        <AboutTitle />
        <AboutPersonal />
        <AboutSkill />
        <AboutEdEx />
      </motion.div>
    </div>
  )
}

export default About