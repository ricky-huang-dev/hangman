interface Props {
  targetWord: string[]
}

function HiddenWord({ targetWord }: Props) {
  return targetWord.map((e, index) => (
    <p style={{ display: 'inline-block', margin: '8px' }} key={index}>
      {e}
    </p>
  ))
}

export default HiddenWord
