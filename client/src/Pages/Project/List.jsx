import { GiExitDoor } from "react-icons/gi";
const List = ({
    name,
    techStack,
    preview,
    project,
    img,
    onClick
}) => {
  return (
    <div className="list-of-project w-full md:w-4/6 lg:w-3/6 h-3/6 lg:h-4/6 flex flex-col items-center justify-around gap-3 relative shadow-2xl rounded-md text-white !p-2 overflow-y-scroll !m-2 md:!m-0">
        <div className="w-fit h-fit absolute inset-0 !p-2 border rounded-full" onClick={() => onClick(null)}>
            <GiExitDoor className="text-3xl cursor-pointer" />
        </div>
        <div className="name">
            <h1 className="font-bold">{name || 'Project'}</h1>
        </div>
        <div className="w-full grid md:grid-cols-2 place-items-center !pb-2">
            <h1 className="w-4/6 !p-2"><span className="font-bold text-success">Name:</span> {name || 'Project'}</h1>
            <h1 className="w-4/6 !p-2"><span className="font-bold text-success">Tech Stack:</span> {techStack || 'HTML, CSS, JS'}</h1>
            <a href={preview} target="_blank" className="w-4/6 !p-2"><span className="font-bold text-success">Preview:</span> Click</a>
            <h1  className="w-4/6 !p-2"><span className="font-bold text-success">Project:</span> {project || 'Static Website'}</h1>
        </div>
        <div className="w-4/6 h-full">
            <a href={preview} target="_blank" className="w-full h-full">
                <img className="w-full h-full object-contain"  src={img} alt={name} />
            </a>
        </div>
    </div>
  )
}

export default List