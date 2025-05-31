import { FaMapLocationDot } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { SlCallIn } from "react-icons/sl";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const addressData = [
    {
        Icon: <FaMapLocationDot />,
        title: 'ADDRESS POINT',
        data: 'Dindigul, Tamil Nadu, India - 624002'
    },
    {
        Icon: <SiMinutemailer />,
        title: 'MAIL ME',
        data: 'rickymoses86@gmail.com'
    },
    {
        Icon: <SlCallIn />,
        title: 'CALL ME',
        data: '+91 938 495 6809'
    },
];

const socialData = [
    {
        Icon: <FaFacebookF />,
        link: '',
    },
    {
        Icon: <FaXTwitter />,
        link: '',
    },
    {
        Icon: <FaLinkedinIn />,
        link: '',
    },
    {
        Icon: <FaGithub />,
        link: 'https://github.com/Ricky-Moses',
    }
]

const UserInfo = () => {
    return (
        <div className="col1 w-full lg:w-5/12 h-fit lg:h-full flex flex-col items-center">
            <div className="lg:max-w-3/4 flex flex-col gap-5 !p-2">
                <h1 className="title font-bold">DON'T BE SHY!</h1>
                <p className="">As a fresher in the web development field, I'm eager to learn, grow, and contribute. Feel free to reach out for any opportunities, ideas, or feedback.</p>
                <div className="address flex flex-col gap-5">
                    {addressData?.map(({ Icon, title, data }, idx) => (
                        <div key={idx} className="flex gap-3">
                            {Icon}
                            <span className="">
                                <h1 className="lg:text-[20px] font-bold">{title}</h1>
                                <h2 className="">{data}</h2>
                            </span>
                        </div>
                    ))}
                </div>
                <div className="social flex items-center gap-5">
                    {socialData?.map(({Icon, link}, idx) => (
                        <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 grid place-items-center rounded-full">
                            <div className="social-icon">
                                {Icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserInfo