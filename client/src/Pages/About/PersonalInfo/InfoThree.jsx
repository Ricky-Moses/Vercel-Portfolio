
const dataArr = [
    {num: '1+', desc: 'Year Hand-On Practice'},
    {num: '15+', desc: 'Mini Projects'},
    {num: '3+', desc: 'College Collaborations'},
    {num: '3+', desc: 'Seminars'}
]

const InfoThree = () => {
  return (
    <div className='h-full grid grid-cols-2 gap-5 place-items-center !p-3'>
        {dataArr?.map((items) => (
            <div className="card w-full md:w-5/6 h-full grid place-items-center border border-gray-600 !p-2 break-words ">
                <div className="flex items-end flex-wrap gap-1">
                    <h1 className="font-bold">{items?.num}</h1>
                    <p className="">{items?.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default InfoThree