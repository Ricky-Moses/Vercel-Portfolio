import React, { useEffect, useState } from 'react'
// Axios
import axios from 'axios'

const API = import.meta.env.VITE_API_URL_PORTFOLIO;
const about = 'I’m a web developer with a background in Computer Science and a B.Voc in Renewable Energy (2019 – 2024). My journey combines logical thinking and sustainability with hands-on skills in HTML, CSS, JavaScript, React, and modern UI tools. I enjoy building user-friendly applications and constantly strive to grow as a full-stack developer.';
const About = () => {

  const [details, setDetails] = useState([])
  const [hasData, setHasData] = useState(true)
  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [displayText, setDisplayText] = useState('')

  // Get answer based on selected question
  const answer = details.find(ans => ans.question === selectedQuestion)?.answer

  // Data fetching
  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(API);
        console.log('Data:', res.data);
        // console.log('About: ', res?.data[0]?.about);
        setDetails(res?.data[0]?.about)
        if (res?.data[0]?.about?.length > 0) {
          setSelectedQuestion(res?.data[0]?.about?.question)
        }
      }
      catch (err) {
        console.log('Error: ', err.message);
      }
      finally {
        setHasData(false)
      }
    }
    data()

  }, []);

  useEffect(() => {
    if (!answer) return;

    setDisplayText('') // Reset
    let index = 0
    const interval = setInterval(() => {
      setDisplayText(prev => prev + answer[index]);
      index++
      if (index >= answer.length - 1) clearInterval(interval)
    }, 20)
  }, [answer])

  // console.log('details: ', details);
  // console.log('Question', selectedQuestion);

  // console.log(answer);

  return (
    <div className='about grid lg:grid-cols-2 '>
      <div className="ans flex flex-col items-center justify-center text-center !p-1">
        <div className=" !h-90 lg:h-2/6 overflow-scroll lg:overflow-auto !p-1">
          <h1 className='text-2xl'>About Me</h1>
          <div className="">
            {displayText
              ? displayText.split('').map((char, index) => (
                <span key={index} className="answer inline">
                  {char}
                </span>
              ))
              : about}
          </div>
        </div>
      </div>
      <div className="qus flex flex-col items-center justify-center !p-1">
        <h1 className="font-bold">Get To Know Me</h1>
        <select
          name=""
          id=""
          className='w-full md:w-5/6 rounded-2xl !p-2'
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
        >
          {hasData ? (
            <option>Data is fetching....</option>
          ) : (
            <>
              {details && details.map(({ question }) => (
                <option key={question} value={question}>{question}</option>)
              )}
            </>
          )}
        </select>
      </div>
    </div>
  )
}

export default About