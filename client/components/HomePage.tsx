import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import HiddenWord from './HiddenWord.tsx'

function HomePage() {
  // const [targetWord, setTargetWord] = useState([] as string[])
  const [apiWord, setApiWord] = useState('')
  const [guessed, setGuessed] = useState([] as string[])
  const lettersArr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  useEffect(() => {
    //--! Get a random word from the DB --!//
    const answerWord = 'HELLO'
    setApiWord(answerWord)
  }, [])

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const letterTyped = e.target.innerHTML
    setGuessed([...guessed, letterTyped])
  }

  return (
    <>
      <HiddenWord apiWord={apiWord} guessed={guessed} />
      <br />
      {lettersArr.map((letter, index) => (
        <button name={letter} onClick={handleClick} key={index}>
          {letter}
        </button>
      ))}
    </>
  )
}

export default HomePage
