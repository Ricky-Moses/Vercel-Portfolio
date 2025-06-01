import BlankAnimation from "../Components/BlankAnimation"
import Blogpost from "./Blog/Blogpost"
import BlogTitle from "./Blog/BlogTitle"
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="blog max-w-dvw h-dvh">
      <BlankAnimation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: .6, delay: 1 }}
        className="">
        <BlogTitle />
        <Blogpost />
      </motion.div>
    </div>
  )
}

export default Blog