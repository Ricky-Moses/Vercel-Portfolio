import axios from 'axios';
import React, { useEffect, useState } from 'react'
// Image
import Creativity from '../../images/skill/creative.jpg'
import Flexible from '../../images/skill/flexible.jpg'
import Structure from '../../images/skill/structure.jpg'
// Card
import SkillCard from '../skills/SkillCard';

const API = import.meta.env.VITE_API_URL_PORTFOLIO;
const images = [Creativity, Flexible, Structure]
const Skill = () => {

  const [data, setData] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API);
      // console.log('Data:', res.data);
      console.log('Skill: ', res?.data[0]?.skill);
      setData(res?.data[0]?.skill || [])
    }
    fetchData()
  }, [])
  console.log(data);

  const handleSelected = (skill, i) => {
    setSelectedCard({skill, index: i})
  }

  const handleCloseCard = () => {
    setSelectedCard(null)
  }

  return (
    <div className='skill flex items-center justify-center relative'>
      <div className="skill-container w-full xs:w-4/5 xl:w-3/5 h-full lg:h-3/6 grid lg:grid-cols-3 gap-2 !p-1">
        {data.map((skill, i) => (
          <div key={i} className="shadow-2xl rounded-2xl overflow-hidden relative" onClick={() => handleSelected(skill, i)}>
            <div className="absolute h-full lg:h-1/2 lg:relative -z-10">
              <img className="w-full h-full" src={images[i]} alt={skill?.name}/>
            </div>
            <div className="flex flex-col items-center text-center h-1/2 !mt-5 !px-1">
              <h1 className='text-4xl lg:text-2xl font-bold text-white lg:text-black'>{skill?.name}</h1>
              <h2 className="text-white lg:text-black">{skill?.describe}</h2>
            </div>
          </div>
        ))}
      </div>
      {selectedCard && (
        <SkillCard skill={selectedCard.skill} index={selectedCard.index} onClose={handleCloseCard} />
      )}
    </div>
  )
}

export default Skill