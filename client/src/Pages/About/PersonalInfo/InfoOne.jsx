const info = [
    {
        firstName: 'Ricky',
        lastName: 'Moses',
        age: '21 Years',
        fullTime: 'Available',
        phone: '9384956809',
        email: 'rickymoses86@gmail.com',
        linkedin: '',
        nationality: 'India',
        address: 'Dindigul, Tamil Nadu',
        language: 'Tamil, English'
    }
]
const InfoOne = () => {
    return (
        <div className="info !p-2">
            {info?.map((infos, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-5 gap-x-20">
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">First Name: </h2>
                        <h3 className="">{infos?.firstName}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Last Name: </h2>
                        <h3 className="">{infos?.lastName}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Age: </h2>
                        <h3 className="">{infos?.age}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Full Time: </h2>
                        <h3 className="text-accent">{infos?.fullTime}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Phone Number: </h2>
                        <h3 className="">{infos?.phone}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Email: </h2>
                        <h3 className="">{infos?.email}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Linkedin: </h2>
                        <h3 className="">{infos?.linkedin}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Nationality: </h2>
                        <h3 className="">{infos?.nationality}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Address: </h2>
                        <h3 className="">{infos?.address}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-bold">Language: </h2>
                        <h3 className="">{infos?.language}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InfoOne