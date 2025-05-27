import { motion } from "framer-motion";
import { useState } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const HomeTitle = () => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .2, delay: 1.3 }}
            className='home-title w-9/12 h-4/6 flex items-center justify-center '>
            <div className="h-full flex items-center justify-center">
                <div className="max-w-3/4 h-full flex flex-col justify-center gap-2">
                    <div className="name">
                        <h1 className="">── I'M RICKY MOSES</h1>
                        <h1 className="">WEB DEVELOPER</h1>
                    </div>
                    <div className="desc">
                        <p className="font-bold">
                            I'm a front-end developer dedicated to building clean, responsive, and user-friendly interfaces. I'm passionate about creating meaningful digital experiences that make a real difference in people's lives. I enjoy turning complex problems into simple, intuitive solutions, and I’m always eager to learn new technologies to stay ahead in this ever-evolving field.
                        </p>
                    </div>
                    <div className="more h-1/12">
                        <div 
                        className={`${hover ? 'bg-animate' : ''} w-3/12 h-full flex items-center justify-between rounded-3xl`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            <h1 className={`${hover ? 'text-white' : ''} w-10/12 text-center font-bold`}>MORE ABOUT ME</h1>
                            <span 
                            className="w-10 h-full flex items-center justify-center rounded-3xl text-white"
                            onClick={() => navigate('/about')}
                            >
                                <LuArrowBigRightDash />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HomeTitle