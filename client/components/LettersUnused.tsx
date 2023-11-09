import { useState } from 'react'

interface Props {
  guessed: string[]
  setGuessed: React.Dispatch<React.SetStateAction<string[]>>
}

function LettersUnused({ guessed, setGuessed }: Props) {
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

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const letterTyped = e.target.innerHTML
    setGuessed([...guessed, letterTyped])
  }

  return lettersArr.map((letter, index) => (
    <button
      name={letter}
      onClick={handleClick}
      key={index}
      disabled={guessed.includes(letter)}
    >
      {letter}
    </button>
  ))
}

export default LettersUnused
