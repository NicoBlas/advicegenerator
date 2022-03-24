import React, {useEffect, useState} from 'react'
import "./advice.css"
import getQuote from '../../helpers/getQuote'


const initialQuote = {
  slip: {
    id: 200,
    advice: "Sarcasm is the lowest form of wit. Employ correctly with apt timing."

  }

}

const svgDesktop = <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
const svgMobile = <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

const Advice = () => {

  const [quote, setQuote] = useState(initialQuote)
  const [estado, setEstado] = useState(false)

  const updateQuote = () =>{
    getQuote()
      .then((newQuote) =>{
        setQuote(newQuote)
      })
  }


  useEffect(() =>{
    updateQuote();
    
  },[])

  const updateEstado = () =>{
    console.log(estado)
    setEstado(!estado)
  }


  return (
    <div className='advice'>
      <div className='advice__pageStyle'>
        <input type="checkbox" onClick={updateEstado} name='' />
      </div>
      <div className='advice__box' style={{background:estado?"none":"hsl(217, 19%, 24%)"}}>
        <div className='advice__box-number'>
          <h2>ADVICE # {quote.slip.id}</h2>
        
        </div>
        <div className='advice__box-content'>
          <p>"{quote.slip.advice}"</p>

        </div>

        <div className='advice__box-line lineForDesktop'>
          {svgDesktop}
        </div>

        <div className='advice__box-line lineForMobile' >
          {svgMobile}
        </div>

        <div className='advice__button'>
          <button type='button' onClick={updateQuote}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
          
        </div>
        

    </div>

    </div>
    
  )
}

export default Advice