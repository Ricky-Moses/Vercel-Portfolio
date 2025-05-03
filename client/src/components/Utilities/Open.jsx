import React, { useEffect, useState } from 'react'

const Open = ({ fadingOut }) => {
    const [box, setBox] = useState(0)

    useEffect(() => {
        const col = Math.ceil(window.innerWidth / 50)
        const row = Math.ceil(window.innerHeight / 50)
        setBox(col * row)
    }, [])
    console.log(box);

    return (
        <div className={`grid-container ${fadingOut ? 'fade-out' : ''} w-dvw h-dvh overflow-hidden relative`}>
            {Array.from({ length: box }, (_, i) => (
                <div key={i} className='box'></div>
            ))}
            <div className="grid-text w-full text-center">
                {
                    ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 'T', 'o', ' ', 'M', 'y', '.', '.', '.'].map((text, i) => (
                        <div key={i} className={`letter letter-${i} inline text-7xl font-extrabold tracking-widest`}>
                            {text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Open