import { useState, useEffect } from 'react'
import { getWord } from '../apiClient.ts'
import HiddenWord from './HiddenWord.tsx'
import LettersUnused from './LettersUnused.tsx'
import Hangman from './HangMan.tsx'
import Outcome from './Outcome.tsx'

function HomePage() {
  // const [targetWord, setTargetWord] = useState([] as string[])
  const [apiWord, setApiWord] = useState('')
  const [guessed, setGuessed] = useState([] as string[])
  const [outcome, setOutcome] = useState('')

  useEffect(() => {
    //--! Get a random word from the DB --!//
    game()
  }, [])

  function game() {
    getWord()
      .then((response) => setApiWord(response.words.toUpperCase()))
      .catch((err) => {
        console.error(err.message)
      })
  }

  const incorrect = guessed.filter((letter) => {
    return !apiWord.includes(letter)
  })

  if (outcome === '' && incorrect.length >= 7) {
    setOutcome('lose')
  } else if (
    outcome === '' &&
    guessed.length > 0 &&
    apiWord.length > 0 &&
    apiWord.split('').every((letter) => guessed.includes(letter))
  ) {
    setOutcome('win')
  }
  function handleNewGame() {
    game()
    setOutcome('')
    setGuessed([])
  }

  return (
    <>
      <div className="container">
        <Hangman tries={incorrect.length} />
        <div className="guessWordContainer">
          <HiddenWord apiWord={apiWord} guessed={guessed} />
        </div>
      </div>
      <div className="letters">
        <LettersUnused guessed={guessed} setGuessed={setGuessed} />
        <Outcome outcome={outcome} apiWord={apiWord} />
      </div>
        {outcome === '' && (
        <LettersUnused guessed={guessed} setGuessed={setGuessed} />
      )}
      {outcome !== '' && <button onClick={handleNewGame}>New game</button>}
      <Hangman tries={incorrect.length} />
    </>
  )
}

export default HomePage
