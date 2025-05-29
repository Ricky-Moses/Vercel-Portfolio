import { useState } from "react"
import { FaDownload } from "react-icons/fa";

const info = [
    {
        firstName: 'Ricky',
        lastName: 'Moses',
        age: '21 Years',
        fullTime: 'Available',
        phone: '9384956809',
        email: 'rickymoses86@gmail.com',
        linkedin: '',
        nationality: 'India',
        address: 'Dindigul, Tamil Nadu',
        language: 'Tamil, English'
    }
]
const AboutPersonal = () => {
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    return (
        <div className="about-personal grid lg:grid-cols-2gap-1 md:!p-2">
            <div className=" flex md:items-center justify-center flex-col md:!p-2">
                <div className="md:max-w-5/6">
                    <h1 className="font-bold !p-2">PERSONAL INFOS</h1>
                    <div className="info !p-2">
                        {info?.map((infos, idx) => (
                            <div key={idx} className="grid md:grid-cols-2 gap-5">
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">First Name: </h2>
                                    <h3 className="">{infos?.firstName}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Last Name: </h2>
                                    <h3 className="">{infos?.lastName}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Age: </h2>
                                    <h3 className="">{infos?.age}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Full Time: </h2>
                                    <h3 className="text-accent">{infos?.fullTime}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Phone Number: </h2>
                                    <h3 className="">{infos?.phone}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Email: </h2>
                                    <h3 className="">{infos?.email}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Linkedin: </h2>
                                    <h3 className="">{infos?.linkedin}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Nationality: </h2>
                                    <h3 className="">{infos?.nationality}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Address: </h2>
                                    <h3 className="">{infos?.address}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold">Language: </h2>
                                    <h3 className="">{infos?.language}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
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
                </div>
            </div>
            <div className="!p-2 border"></div>
        </div>
    )
}

export default AboutPersonal