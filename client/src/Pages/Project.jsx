import BlankAnimation from "../Components/BlankAnimation"
import ProjectList from "./Project/ProjectList"
import ProjectTitle from "./Project/ProjectTitle"

const Project = () => {
  return (
    <div className="project max-w-dvw h-dvh">
      <BlankAnimation />
      <div className="flex flex-col gap-5">
        <ProjectTitle />
        <ProjectList />
      </div>
    </div>
  )
}

export default Project