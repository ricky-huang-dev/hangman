import { useState } from 'react'

interface Props {
  lettersArr: string[]
}

function LettersUnused({ lettersArr }: Props) {
  const [apiWord, setApiWord] = useState('')

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const apiWordArr = apiWord.split('')
    const letterTyped = e.target.innerHTML
    const newArr = apiWordArr.map((e, index) => {
      if (targetWord[index] !== '_') return targetWord[index]
      if (e === letterTyped) return e
      else return '_'
    })
  }

  return lettersArr.map((letter, index) => (
    <button name={letter} onClick={handleClick} key={index}>
      {letter}
    </button>
  ))
}

export default LettersUnused
