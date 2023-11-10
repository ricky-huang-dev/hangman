interface Props {
  apiWord: string
  guessed: string[]
}

function HiddenWord({ apiWord, guessed }: Props) {
  if (!apiWord) return

  console.log(apiWord)

  const result = apiWord.split('').map((letter) => {
    return guessed.includes(letter) ? letter : '_'
  })

  return result.map((e, index) => (
    <div key={index} className="guessWord">
      {e}
    </div>
  ))
}

export default HiddenWord
