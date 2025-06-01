import { useContext, useMemo, useState } from "react"
import { FetchedDataContext } from "../../Context/UseContext"
import Drawer from "../../Components/Drawer"

const Blogpost = () => {
  const { data, loading, error } = useContext(FetchedDataContext)
  const blogsData = useMemo(() => data[1] || [], [data])
  const [selectedBlog, setSelectedBlog] = useState(null)

  // console.table(blogsData); 
  return (
    <div className="blog-post grid place-items-center text-white">
      {loading ? (
        <div className="alert alert-info">Data is Fetching</div>
      ) : error ? (
        <div className="alert alert-error">Error occurred when fetching data</div>
      ) : (
        <div className="lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-3 !p-2 !py-3">
          {blogsData?.map((blog) => (
            <div 
            key={blog.id}
            className="card border border-neutral-500 h-[22rem] gap-4 !p-1 cursor-pointer"
            onClick={() => setSelectedBlog(blog.id)}
            >
              <figure className="w-full h-full">
                <img className="w-full h-full object-cover" src={blog?.img} />
              </figure>
              <div className="card-title">
                <h1 className="line-clamp-1">{blog?.title}</h1>
              </div>
              <div className="card-body ">
                <p className="line-clamp-4">{blog?.descOne?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedBlog && <Drawer
        drawerID={selectedBlog}
        setDrawerID={setSelectedBlog}
      />}
    </div>
  )
}

export default Blogpost