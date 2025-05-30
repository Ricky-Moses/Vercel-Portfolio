
const skillArr = [
  { label: 'HTML', percentage: '90' },
  { label: 'CSS', percentage: '85' },
  { label: 'Sass', percentage: '80' },
  { label: 'JavaScript', percentage: '60' },
  { label: 'React JS', percentage: '55' },
  { label: 'Mongo DB', percentage: '50' },
  { label: 'Node JS', percentage: '40' },
  { label: 'Express JS', percentage: '40' },
]

const AboutSkill = () => {
  return (
    <div className="about-skill max-w-full grid place-items-center !p-3">
      <h1 className="font-bold">My Skills</h1>
      <div className="w-full h-fit md:h-130 grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-3 place-items-center">
        {skillArr?.map((items) => (
          <div className="flex flex-col justify-center gap-2 items-center">
            <div className="radial-progress" style={{ "--value": items?.percentage, "--size": "7em" }}
              aria-valuenow={items?.percentage} role="progressbar">{items?.percentage}</div>
              <h2 className="font-bold text-[20px]">{items?.label}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutSkill