import BlankAnimation from "../Components/BlankAnimation"
import ContactTitle from "./Contact/ContactTitle"
import UserDetails from "./Contact/UserDetails"
import UserInfo from "./Contact/UserInfo"

const Contact = () => {
  return (
    <div className="contact max-w-dvw h-dvh">
      <BlankAnimation />
      <div className="w-full h-3/4">
        <ContactTitle />
        <div className="contact-details w-full lg:h-full flex flex-col lg:flex-row lg:items-center gap-2 !p-2">
          <UserInfo />
          <UserDetails />
        </div>
      </div>
    </div>
  )
}

export default Contact