import { useContext, useEffect, useMemo, useRef } from "react";
import { FetchedDataContext } from "../Context/UseContext";
import Title from './Title'
import { MdDateRange } from "react-icons/md";
import { BsPostcard } from "react-icons/bs";
import { IoIosExit } from "react-icons/io";

const Drawer = ({
    drawerID,
    setDrawerID
}) => {
    const { data } = useContext(FetchedDataContext)
    const selectedBlog = useMemo(() => data[1]?.find(blog => blog.id === drawerID), [data, drawerID])
    const drawerRef = useRef(null)
    // console.log(selectedBlog);

    useEffect(() => {
        const closeDrawer = (e) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target)) {
                setDrawerID(null)
            }
        }
        document.addEventListener('mousedown', closeDrawer)
        return () => document.removeEventListener('mousedown', closeDrawer)
    }, [setDrawerID])

    if (!selectedBlog) return null
    return (
        <div className="drawers relative flex flex-col lg:w-1/2 gap-3 !p-1 overflow-y-scroll text-white" ref={drawerRef}>
            <div className="exit !p-1 text-2xl" onClick={() => setDrawerID(null)}>
                <IoIosExit />
            </div>
            <Title
                bgTitle='TAMIL'
                headTitle={`${selectedBlog?.name}`}
                bgFontSize='clamp(5em, 8vw, 8em)'
                headFontSize='clamp(2em, 2vw, 2em)'
                height='clamp(5rem, 10vw, 10rem)'
                width='100%'
            />
            <figure className=" h-2/6 !mx-auto">
                <img className=" h-full object-contain" src={selectedBlog?.img} />
            </figure>
            <section className="head-title  flex items-center gap-5">
                <h1 className="font-extrabold">{selectedBlog?.title};</h1>
            </section>
            <section className="post  flex items-center gap-2 ">
                <span className=" flex items-center gap-2">
                    <MdDateRange /> : {selectedBlog?.date}
                </span>
                <span className=" flex items-center gap-2">
                    <BsPostcard /> : {selectedBlog?.post}
                </span>
            </section>
            <section className="head-topic">
                <h1 className="font-bold">{selectedBlog?.descOne?.subTitle}:</h1>
                <p className="tracking-wide">{selectedBlog?.descOne?.desc}</p>
            </section>
            <section className="advantage">
                <h1 className="">{selectedBlog?.descTwo?.subTitle}:</h1>
                <ul className="!px-4.5">
                    {selectedBlog?.descTwo?.desc.map((desc) => (
                        <li className="list-decimal">
                            {desc?.p}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="disadvantage">
                <h1 className="">{selectedBlog?.descThree?.subTitle}:</h1>
                <ul className="!px-4.5">
                    {selectedBlog?.descThree?.desc.map((desc) => (
                        <li className="list-decimal">
                            {desc?.p}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Drawer;
