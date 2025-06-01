
// Framer-Motion
import { motion } from "framer-motion";
import { useContext, useMemo, useState } from 'react'
import List from './List'
import { FetchedDataContext } from "../../Context/UseContext";


const ProjectList = () => {

  const { data, loading, error } = useContext(FetchedDataContext)
  const projectData = useMemo(() => data[0] || [], [data])
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
          {projectData?.map((items, idx) => (
            <figure
              key={idx}
              className="md:w-5/6 h-full rounded-2xl overflow-hidden "
              onClick={() => setSelectedList(items)}>
              <div className="w-full">
                <img className="w-full h-full rounded-2xl transition-all hover:scale-110 hover:-translate-y-5" src={items?.img} alt={items?.name} />
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