import React from 'react'
// Image
import Creativity from '../../images/skill/creative.jpg'
import Flexible from '../../images/skill/flexible.jpg'
import Structure from '../../images/skill/structure.jpg'

const images = [Creativity, Flexible, Structure]
const SkillCard = ({ skill, index, onClose }) => {

    return (
        <div className='w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-1/2 z-10 !p-1'>
            <div className="md:w-5/6 lg:w-2/6 h-full lg:h-5/6 flex flex-col items-center bg-white !shadow-2xl rounded-2xl overflow-hidden">
                <div className=" h-full">
                    <img className="w-full h-full object-full" src={images[index]} />
                </div>
                <div className=" w-full h-full flex flex-col items-center text-center overflow-y-scroll !p-1">
                    <h1 className="text-2xl underline">{skill?.describe}</h1>
                    <ul className='flex flex-col items-center gap-2'>
                        <li>{skill?.description_one}</li>
                        <li>{skill?.description_two}</li>
                        <li>{skill?.description_three}</li>
                        <li>{skill?.description_four}</li>
                    </ul>
                </div>
                <div className="">
                    <button className="!m-1 !px-2 cursor-pointer hover:bg-black hover:text-white" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default SkillCard