import BlankAnimation from "../Components/BlankAnimation"
import AboutPersonal from "./About/AboutPersonal"
import AboutTitle from "./About/AboutTitle"

const About = () => {
  return (
    <div className="about w-dvw h-dvh">
      <BlankAnimation />
      <AboutTitle />
      <AboutPersonal />
    </div>
  )
}

export default About