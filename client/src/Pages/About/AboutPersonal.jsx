
import InfoOne from "./PersonalInfo/InfoOne";
import InfoThree from "./PersonalInfo/InfoThree";
import InfoTwo from "./PersonalInfo/InfoTwo";


const AboutPersonal = () => {
    
    return (
        <div className="about-personal grid lg:grid-cols-2 gap-1 md:!p-2">
            <div className=" flex md:items-center justify-center flex-col md:!p-2">
                <div className="md:max-w-5/6 text-white">
                    <h1 className="title font-bold !p-2">PERSONAL INFOS</h1>
                    <InfoOne />
                    <InfoTwo />
                </div>
            </div>
            <div className="work-card !p-2">
                <InfoThree />
            </div>
        </div>
    )
}

export default AboutPersonal