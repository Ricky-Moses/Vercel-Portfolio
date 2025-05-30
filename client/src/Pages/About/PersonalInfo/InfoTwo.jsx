import { useState } from 'react'
import { FaDownload } from "react-icons/fa";

const InfoTwo = () => {
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    return (
        <div className="download-animate !p-2">
            <div
                className={`${hover ? 'bg-animate' : ''} md:w-3/6 h-full flex items-center justify-between`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h2 className={`${hover ? '!text-white' : ''} !mx-auto text-center font-bold`}>DOWNLOAD CV</h2>
                <span
                    className="w-10 h-10 flex items-center justify-center text-white"

                >
                    <FaDownload />
                </span>
            </div>
        </div>
    )
}

export default InfoTwo