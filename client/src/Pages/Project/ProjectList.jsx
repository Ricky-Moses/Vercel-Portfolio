import ImgOne from '../../Asset/Project/Img_1.jpg'
import ImgTwo from '../../Asset/Project/Img_2.jpg'
import ImgThree from '../../Asset/Project/Img_3.jpg'
import ImgFour from '../../Asset/Project/Img_4.jpg'
import ImgFive from '../../Asset/Project/Img_5.jpg'
import ImgSix from '../../Asset/Project/Img_6.jpg'
import ImgSeven from '../../Asset/Project/Img_7.jpg'
import ImgEight from '../../Asset/Project/Img_8.jpg'
import ImgNine from '../../Asset/Project/Img_9.jpg'
import ImgTen from '../../Asset/Project/Img_10.jpg'
import ImgEleven from '../../Asset/Project/Img_11.jpg'
import ImgTwelve from '../../Asset/Project/Img_12.jpg'
import ImgThirteen from '../../Asset/Project/Img_13.jpg'
import ImgFourteen from '../../Asset/Project/Img_14.jpg'
// Framer-Motion
import { motion } from "framer-motion";
import { useState } from 'react'
import List from './List'

const ProjectListArr = [
  {
    img: ImgOne,
    name: 'First Portfolio',
    quotes: 'The clearest way into the Universe is through a forest wilderness. In every walk with nature, one receives far more than he seeks',
    link: 'https://ricky-moses.github.io/Portfolio-3/',
    techStack: 'HTML, CSS, JS',
    project: 'Static Website'
  },
  {
    img: ImgTwo,
    name: 'Simple Tamil Blog',
    quotes: 'Look deep into nature, and then you will understand everything better. Nature hides her secrets because of her essential loftiness, but not by means of ruse.',
    link: 'https://ricky-moses.github.io/Simple-Blog/',
    techStack: 'HTML, CSS, Bootstrap, JS',
    project: 'Static Website'
  },
  {
    img: ImgThree,
    name: 'Static E-Commerce',
    quotes: 'Adopt the pace of nature: her secret is patience. Nature always wears the colors of the spirit.',
    link: 'https://ricky-moses.github.io/E-commerceOne/',
    techStack: 'HTML, CSS, JS',
    project: 'Static Website'
  },
  {
    img: ImgFour,
    name: 'Coffee Shop Blog',
    quotes: 'Heaven is under our feet as well as over our heads. I went to the woods because I wished to live deliberately.',
    link: 'https://ricky-moses.github.io/Coffee-Shop-React/',
    techStack: 'JSX, CSS, Bootstrap, React JS',
    project: 'Static Website'
  },
  {
    img: ImgFive,
    name: 'Weather App',
    quotes: 'To see a world in a grain of sand, And a heaven in a wild flower, Hold infinity in the palm of your hand, And eternity in an hour.',
    link: 'https://ricky-moses.github.io/React-Projects/',
    techStack: 'JSX, SCSS, React Bootstrap, Tailwind CSS, Daisy UI, React JS',
    project: ''
  },
  {
    img: ImgSix,
    name: 'To-Do List',
    quotes: 'Come forth into the light of things, Let nature be your teacher. One impulse from a vernal wood. May teach you more of man.',
    link: 'https://ricky-moses.github.io/React-Projects/',
    techStack: 'JSX, SCSS, React Bootstrap, Tailwind CSS, Daisy UI, React JS',
    project: 'Static Website'
  },
  {
    img: ImgSeven,
    name: 'Calorie App',
    quotes: 'The poetry of the earth is never dead. When all the birds are faint with the hot sun, And hide in cooling trees.',
    link: 'https://ricky-moses.github.io/React-Projects/',
    techStack: 'JSX, SCSS, React Bootstrap, Tailwind CSS, Daisy UI, React JS',
    project: 'Static Website'
  },
  {
    img: ImgEight,
    name: 'Random Quote Generator',
    quotes: 'Nature does not hurry, yet everything is accomplished. The best way to live with nature is to let things flow naturally.',
    link: 'https://ricky-moses.github.io/React-Projects/',
    techStack: 'JSX, SCSS, React Bootstrap, Tailwind CSS, Daisy UI, React JS',
    project: 'Static Website'
  },
  {
    img: ImgNine,
    name: 'Calculator',
    quotes: 'To walk in nature is to witness a thousand miracles. Even a single leaf carries wisdom and wonder.',
    link: 'https://ricky-moses.github.io/React-Projects/',
    techStack: 'JSX, SCSS, React Bootstrap, Tailwind CSS, Daisy UI, React JS',
    project: 'Static Website'
  },
  {
    img: ImgTen,
    name: 'Full Stack To-Do List',
    quotes: 'Nature is not a place to visit. It is home. We must learn to live in harmony with it, not apart from it.',
    link: 'https://vercel-todo-list-sepia.vercel.app/',
    techStack: 'JSX, CSS, Tailwind CSS, React JS, Node JS, Express JS, Mongodb Compass, Mongodb Atlas',
    project: 'Dynamic Website'
  },
  {
    img: ImgEleven,
    name: 'Full Stack Register Form',
    quotes: 'If you truly love nature, You will find beauty everywhere — In a flower, in the sky, in the soil beneath your feet.',
    link: 'https://form-mern.vercel.app/',
    techStack: 'JSX, CSS, Tailwind CSS, React JS, Node JS, Express JS, Mongodb Compass, Mongodb Atlas',
    project: 'Dynamic Website'
  },
  {
    img: ImgTwelve,
    name: '',
    quotes: 'Just living is not enough. One must have sunshine, freedom, and a little flower. To feel truly alive.',
    link: '',
    techStack: '',
    project: ''
  },
  {
    img: ImgThirteen,
    name: '',
    quotes: 'The best remedy for those who are afraid, lonely or unhappy, Is to go outside,Somewhere they can be alone with the sky, nature, and God.',
    link: '',
    techStack: '',
    project: ''
  },
  {
    img: ImgFourteen,
    name: '',
    quotes: 'Time spent amongst trees Is never wasted time. Trees are silent teachers of strength and peace.',
    link: '',
    techStack: '',
    project: ''
  },
]

const ProjectList = () => {

  const [selectedList, setSelectedList] = useState(null)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: .6, delay: 1 }}
        className='project-list grid place-items-center'

      >
        <div className="project-card grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center w-4/5 !py-2 text-white">
          {ProjectListArr?.map((items, idx) => (
            <figure
              key={idx}
              className="md:w-5/6 h-full rounded-2xl overflow-hidden "
              onClick={() => setSelectedList(items)}>
              <div className="w-full">
                <img className="w-full h-full rounded-2xl transition-all hover:scale-110 hover:-translate-y-5" src={items.img} alt={items.name} />
              </div>
              <figcaption className='font-bold italic text-center'>
                <blockquote className=''>
                  " {items?.quotes} "
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
      {selectedList && <List
        name={selectedList.name}
        techStack={selectedList.techStack}
        preview={selectedList.link}
        project={selectedList.project}
        img={selectedList.img}
        onClick={setSelectedList}
      />}
    </>
  )
}

export default ProjectList