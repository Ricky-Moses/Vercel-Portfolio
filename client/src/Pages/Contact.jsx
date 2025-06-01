import BlankAnimation from "../Components/BlankAnimation"
import ContactTitle from "./Contact/ContactTitle"
import UserDetails from "./Contact/UserDetails"
import UserInfo from "./Contact/UserInfo"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact max-w-dvw h-dvh overflow-x-hidden">
      <BlankAnimation />
      <div className="w-full h-3/4 text-white">
        <ContactTitle />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: .6, delay: 1 }}
          className="contact-details w-full lg:h-full flex flex-col lg:flex-row lg:items-center gap-2 !p-2">
          <UserInfo />
          <UserDetails />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact