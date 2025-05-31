import { useState } from "react"

const UserDetails = () => {
    const [msg, setMsg] = useState({

    })
  return (
    <div className="col2 w-full lg:w-7/12 h-fit lg:h-full !p-2">
        <form className=" w-full h-full flex flex-col gap-4 !p-2">
            <div className="flex items-center gap-2">
                <input type="text" className="input w-full !px-2" placeholder="Your Name" />
                <input type="email" className="input w-full !px-2" placeholder="Your Email" />
            </div>
            <div className="">
                <input type="text" className="input w-full !px-2" placeholder="Your Subject" />
            </div>
            <div className="h-2/6">
                <textarea className="textarea w-3/4 !p-2" placeholder="Your Message"></textarea>
            </div>
            <div className="">
                <input type="submit" className="btn btn-wide" value='Submit' />
            </div>
        </form>
    </div>
  )
}

export default UserDetails