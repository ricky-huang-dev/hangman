import { useState, useEffect } from 'react'
import { getWord } from '../apiClient.ts'
import HiddenWord from './HiddenWord.tsx'
import LettersUnused from './LettersUnused.tsx'
import Hangman from './HangMan.tsx'

function HomePage() {
  // const [targetWord, setTargetWord] = useState([] as string[])
  const [apiWord, setApiWord] = useState('')
  const [guessed, setGuessed] = useState([] as string[])
  const [outcome, setOutcome] = useState('')
  useEffect(() => {
    //--! Get a random word from the DB --!//
    getWord()
      .then((response) => setApiWord(response.words.toUpperCase()))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  const incorrect = guessed.filter((letter) => {
    return !apiWord.includes(letter)
  })
  if (incorrect.length >= 7) {
    setOutcome('lose')
  } else if (apiWord.split('').every((letter) => guessed.includes(letter))) {
    setOutcome('win')
  }

  return (
    <>
      <HiddenWord apiWord={apiWord} guessed={guessed} />
      <br />
      <LettersUnused guessed={guessed} setGuessed={setGuessed} />
      <Hangman tries={incorrect.length} />
      <></>
    </>
  )
}

export default HomePage
