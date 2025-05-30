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
const ProjectListArr = [
  {
    img: ImgOne,
    name: '',
    quotes: 'The clearest way into the Universe is through a forest wilderness. In every walk with nature, one receives far more than he seeks',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgTwo,
    name: '',
    quotes: 'Look deep into nature, and then you will understand everything better. Nature hides her secrets because of her essential loftiness, but not by means of ruse.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgThree,
    name: '',
    quotes: 'Adopt the pace of nature: her secret is patience. Nature always wears the colors of the spirit.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgFour,
    name: '',
    quotes: 'Heaven is under our feet as well as over our heads. I went to the woods because I wished to live deliberately.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgFive,
    name: '',
    quotes: 'To see a world in a grain of sand, And a heaven in a wild flower, Hold infinity in the palm of your hand, And eternity in an hour.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgSix,
    name: '',
    quotes: 'Come forth into the light of things, Let nature be your teacher. One impulse from a vernal wood. May teach you more of man.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgSeven,
    name: '',
    quotes: 'The poetry of the earth is never dead. When all the birds are faint with the hot sun, And hide in cooling trees.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgEight,
    name: '',
    quotes: 'Nature does not hurry, yet everything is accomplished. The best way to live with nature is to let things flow naturally.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgNine,
    name: '',
    quotes: 'To walk in nature is to witness a thousand miracles. Even a single leaf carries wisdom and wonder.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgTen,
    name: '',
    quotes: 'Nature is not a place to visit. It is home. We must learn to live in harmony with it, not apart from it.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgEleven,
    name: '',
    quotes: 'If you truly love nature, You will find beauty everywhere — In a flower, in the sky, in the soil beneath your feet.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgTwelve,
    name: '',
    quotes: 'Just living is not enough. One must have sunshine, freedom, and a little flower. To feel truly alive.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgThirteen,
    name: '',
    quotes: 'The best remedy for those who are afraid, lonely or unhappy, Is to go outside,Somewhere they can be alone with the sky, nature, and God.',
    link: '',
    language: '',
    project: ''
  },
  {
    img: ImgFourteen,
    name: '',
    quotes: 'Time spent amongst trees Is never wasted time. Trees are silent teachers of strength and peace.',
    link: '',
    language: '',
    project: ''
  },
]

const ProjectList = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: .6, delay: 1 }}
      className='project-list grid place-items-center'>
      <div className="project-card grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center w-4/5 !py-2">
        {ProjectListArr?.map((items, idx) => (
          <figure
            key={idx}
            className="w-5/6 h-full rounded-2xl overflow-hidden ">
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
  )
}

export default ProjectList