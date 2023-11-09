import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function HomePage() {
  const [targetWord, setTargetWord] = useState([] as string[])
  const [apiWord, setApiWord] = useState('')

  const lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  
  
  useEffect(() => {
    const answerWord = 'HELLO'

    const myArr = []
    for (let i = 0; i < answerWord.length; i++) {
      myArr.push('_')
    }

    setTargetWord(myArr)
    setApiWord(answerWord)
  },[])

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const apiWordArr = apiWord.split('')
    const letterTyped = e.target.innerHTML
    const newArr = apiWordArr.map((e,index) => {
      if (targetWord[index]!=='_') return targetWord[index]
      if (e === letterTyped) return e
      else return '_'
    })
    setTargetWord(newArr)
    if (targetWord.join('') === apiWord) {
      alert('You win!')
    }
  }

  return (
    <>
      {targetWord.map((e, index) => (
          <p style={{display:'inline-block', margin:'8px'}} key={index}>{e}</p>
        ))}<br/>
      {lettersArr.map((letter,index) => (
          <button name={letter} onClick={handleClick} key={index}>{letter}</button>
        ))}
    </>
  )
}

export default HomePage
