import React, { useEffect, useState } from 'react'

const head = "Hello There, I'm Ricky Moses"
const sub = "Automation is not the goal — it is the standard. I stylize with surgical precision and deploy with mission-grade stability. I transform logic into landscapes, interactions into outcomes, and data into design."
const headContent = head.split('')
const subContent = sub.split('')
console.log(headContent);
console.log(subContent);

const Home = () => {
  const [subTime, setSubTime] = useState(false)
  const [mediaTime, setMediaTime] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      setSubTime(true)
    }, 6000)
    return () => clearTimeout(time)
  })

  useEffect(() => {
    const time = setTimeout(() => {
      setMediaTime(true)
    }, 6500)
    return () => clearTimeout(time)
  })
  return (
    <>
      <div className="home flex flex-col items-center justify-center">
        <main className="md:max-w-3/4 h-3/6 flex flex-col items-center gap-2 text-center">
          <div className="head">
            {headContent.map((text, i) => <h1 key={i} className={`title title-${i} tracking-widest inline font-bold`}>{text}</h1>)}
          </div>
          <div className="sub">
            {subTime && subContent.map((text, i) => <div key={i} className={`content content-${i} inline font-bold tracking-widest`}>{text}</div>)}
          </div>
          <div className="contact flex flex-col items-center gap-3">
            {mediaTime && <>
              <h1 className="font-bold underline tracking-widest">Touch With Me</h1>
              <div className="link flex items-center justify-center gap-5 sm:gap-10 lg:gap-20">
                <a href='http://www.linkedin.com/in/rickymoses08' target='_blank' rel='noopener noreferrer' className=""><div className="items">LI</div></a>
                <a href='https://www.facebook.com/share/1LDkY5n5M1/' target='_blank' rel='noopener noreferrer' className=""><div className="items">FB</div></a>
                <a href='https://x.com/rickymoses08?t=lbBmixzhmvwqUB279RQIQA&s=09' target='_blank' rel='noopener noreferrer' className=""><div className="items">XT</div></a>
                <a href='https://github.com/Ricky-Moses' target='_blank' rel='noopener noreferrer' className=""><div className="items">GH</div></a>
                <a href='https://mail.google.com/mail/?view=cm&to=rickymoses08122003@gmail.com&su=Hello%20Ricky&body=I%20wanted%20to%20connect%20with%20you.' target='_blank' rel='noopener noreferrer' className=""><div className="items">GM</div></a>
              </div>
            </>}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home