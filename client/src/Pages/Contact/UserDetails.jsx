import { useState } from "react"

const UserDetails = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        msg: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rickymoses86@gmail.com&su=${encodeURIComponent(
            form.subject
        )}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.msg}`
        )}`;

        window.open(gmailLink, "_blank");

        setForm({
            name: '',
            email: '',
            subject: '',
            msg: ''
        })
    }
    console.log(form);
    return (
        <div className="col2 w-full lg:w-7/12 h-fit lg:h-full !p-2">
            <form onSubmit={handleSubmit} className=" w-full h-full flex flex-col gap-4 !p-2">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        name="name"
                        className="input w-full !px-2"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        name="email"
                        className="input w-full !px-2"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        name="subject"
                        className="input w-full !px-2"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Your Subject"
                    />
                </div>
                <div className="h-2/6">
                    <textarea
                        className="textarea w-3/4 !p-2"
                        name="msg"
                        value={form.msg}
                        onChange={handleChange}
                        placeholder="Your Message"
                    >
                    </textarea>
                </div>
                <div className="">
                    <input
                        type="submit"
                        className="btn btn-wide"
                        value='Submit'
                    />
                </div>
            </form>
        </div>
    )
}

export default UserDetails