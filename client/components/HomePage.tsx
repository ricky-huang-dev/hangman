import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import HiddenWord from './HiddenWord.tsx'
import LettersUnused from './LettersUnused.tsx'

function HomePage() {
  // const [targetWord, setTargetWord] = useState([] as string[])
  const [apiWord, setApiWord] = useState('')
  const [guessed, setGuessed] = useState([] as string[])

  useEffect(() => {
    //--! Get a random word from the DB --!//
    const answerWord = 'HELLO'
    setApiWord(answerWord)
  }, [])

  return (
    <>
      <HiddenWord apiWord={apiWord} guessed={guessed} />
      <br />
      <LettersUnused guessed={guessed} setGuessed={setGuessed} />
    </>
  )
}

export default HomePage
