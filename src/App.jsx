import { useEffect, useState } from "react"
import { PropTypes } from 'prop-types'

App.propTypes = {
    count: PropTypes.number,
}

export default function App() {

  const  [ advice, setAdvice ]  = useState('')
  const [ count, setCount ] = useState(-1)

  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    // console.log(data.slip.advice)
    setAdvice(data.slip.advice)
    setCount( c =>  c + 1 )
  }

  useEffect(()=>{
    getAdvice()
  }, [])
  
  return (
    <>
      <div>
        <button onClick={ getAdvice } >Get Advice</button>
        <Message count={count} />
        <h3>
          <blockquote> { advice } </blockquote>
        </h3>
      </div>
    </>
  )
}




function Message(props) {
  
  return (
    <>
      <div>
         <p>You have read <strong>{ props.count }</strong> pieces of advice</p>
      </div>
    </>
  )
}



