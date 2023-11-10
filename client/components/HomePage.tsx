import { useState, useEffect } from 'react'
import { getGreeting, getWord } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import HiddenWord from './HiddenWord.tsx'
import LettersUnused from './LettersUnused.tsx'
import Hangman from './HangMan.tsx'
import basepng from '../public/base.png'

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

  const incorrect = guessed.filter((letter) => {
    console.log(!apiWord.includes(letter))
    return !apiWord.includes(letter)
  })

  return (
    <>
      <HiddenWord apiWord={apiWord} guessed={guessed} />
      <br />
      <LettersUnused guessed={guessed} setGuessed={setGuessed} />
      <Hangman tries={incorrect.length} />
    </>
  )
}

export default HomePage
