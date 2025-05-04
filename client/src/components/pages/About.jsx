import React, { useEffect, useState } from 'react'
// Axios
import axios from 'axios'

const API = import.meta.env.API_URL_PORTFOLIO;
const About = () => {

  const [details, setDetails] = useState('')

  useEffect(() => {
    axios.get(API)
      .then(res => {
        console.log(res);
        setDetails(res.data);
      })
      .catch(err => {
        console.error('Error fetching About data:', err);
      });
  }, []);

  return (
    <div className='about grid grid-cols-2'>
      <div className="ans border"></div>
      <div className="qus border">

      </div>
    </div>
  )
}

export default About