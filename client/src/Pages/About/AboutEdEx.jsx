import { PiStudentBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

const AboutMe = [
    {
        Icon: <PiStudentBold />,
        year: '2014 - 2019',
        studies: 'SSLC',
        place: 'St. Mary\'s Hr. Sec. School, Dindigul',
        desc: 'From 6th to 10th standard, my focus was mostly on building a strong academic base. I wasn’t thinking about careers back then, but I was curious. I enjoyed logical subjects like mathematics and science, and I always preferred understanding the “why” behind concepts rather than just memorizing them.'
    },
    {
        Icon: <PiStudentBold />,
        year: '2019 - 2021',
        studies: 'HSC',
        place: 'St. Mary\'s Hr. Sec. School, Dindigul',
        desc: 'In 11th and 12th grade, I chose the Computer Science stream, and that decision slowly began shaping my direction. At first, I was just learning what programming even was — writing small C programs, understanding logic building, and getting introduced to concepts like loops, arrays, and OOP.'
    },
    {
        Icon: <PiStudentBold />,
        year: '2021 - 2024',
        studies: 'B.VOC.RENEWABLE ENERGY',
        place: 'Gandigram University, Dindigul',
        desc: 'When I started my degree in Renewable Energy, I wasn’t entirely sure how it would connect to my deeper interest in tech. But as I went through the course, I gained a strong foundation in sustainable systems, energy sources, and how technology plays a vital role in solving real-world problems.'
    },
    {
        Icon: <FaComputer />,
        year: '2024 - Present',
        studies: 'WEB DEVELOPMENT(MERN STACK)',
        place: 'SDLC',
        desc: 'Web development today feels dynamic and fast-paced, blending creativity with logic.I enjoy building responsive, interactive apps using tools like React, Node.js, and MongoDB.It\'s a continuous learning journey where each project helps me grow and improve.'
    }
    
]

const AboutEdEx = () => {
    return (
        <div className="about-ed grid place-items-center gap-6 !p-3">
            <div className="">
                <h1 className="font-bold">Experience & Education</h1>
            </div>
            <div className="w-11/12 md:w-3/4 grid lg:grid-cols-2 gap-8 place-items-center ">
                {AboutMe?.map(({Icon, year, studies, place, desc}) =>(
                    <div className="w-full h-full flex gap-2 border-l border-gray-500">
                        <div className="indicator !p-3">
                            <span className="w-8 h-8 indicator-item indicator-start badge badge-success text-2xl text-white">{Icon}</span>
                        </div>
                        <div className="flex flex-col gap-3 !py-3">
                            <div className="badge badge-soft badge-success !px-1">{year}</div>
                            <div className="">
                                <h2 className="font-bold">{studies} ─ {place}</h2>
                            </div>
                            <div className="">
                                <p className="">{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutEdEx