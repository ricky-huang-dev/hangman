import { useState, useEffect } from 'react'
import { getGreeting, getWord } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import HiddenWord from './HiddenWord.tsx'
import LettersUnused from './LettersUnused.tsx'

function HomePage() {
  // const [targetWord, setTargetWord] = useState([] as string[])
  const [apiWord, setApiWord] = useState('')
  const [guessed, setGuessed] = useState([] as string[])

  useEffect(() => {
    //--! Get a random word from the DB --!//
    getWord()
      .then((response) => setApiWord(response.words.toUpperCase()))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  // console.log(apiWord)

  return (
    <>
      <HiddenWord apiWord={apiWord} guessed={guessed} />
      <br />
      <LettersUnused guessed={guessed} setGuessed={setGuessed} />
    </>
  )
}

export default HomePage
