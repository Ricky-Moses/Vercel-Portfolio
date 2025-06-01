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
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/Ricky-cv.pdf'
        link.download = 'Ricky-CV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    return (
        <div className="download-animate !p-2">
            <div
                className={`${hover ? 'bg-animate' : ''} md:w-3/6 h-full flex items-center justify-between`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h2 className={`${hover ? '!text-white' : ''} !mx-auto text-center font-bold`}>DOWNLOAD CV</h2>
                <button
                    onClick={handleDownload}
                    className="w-10 h-10 flex items-center justify-center text-white"
                >
                    <FaDownload />
                </button>
            </div>
        </div>
    )
}

export default InfoTwo