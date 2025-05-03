import React, { useEffect, useState } from 'react'

const head = "Hello there, I'm Ricky Moses"
const sub = "Automation is not the goal — it is the standard. I stylize with surgical precision and deploy with mission-grade stability. I transform logic into landscapes, interactions into outcomes, and data into design."
const headContent = head.split('')
const subContent = sub.split('')
console.log(headContent);
console.log(subContent);
const Home = () => {
  const [subTime, setSubTime] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      setSubTime(true)
    }, 6000)
    return () => clearTimeout(time)
  })
  return (
    <>
      <div className="home flex items-center justify-center">
        <main className="md:max-w-3/4 h-1/4 text-center">
          <div className="head">
            {headContent.map((text, i) => <h1 key={i} className={`title title-${i} tracking-widest inline font-bold`}>{text}</h1>)}
          </div>
          <div className="sub">
            {subTime && subContent.map((text, i) => <div key={i} className={`content content-${i} inline font-bold`}>{text}</div>)}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home