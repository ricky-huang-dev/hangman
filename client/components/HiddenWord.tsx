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
    <p style={{ display: 'inline-block', margin: '8px' }} key={index}>
      {e}
    </p>
  ))
}

export default HiddenWord
