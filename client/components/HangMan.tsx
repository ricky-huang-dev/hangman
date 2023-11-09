interface Props {
  tries: number
}

function Hangman({ tries }: Props) {
  return <div>{tries}</div>
}

export default Hangman
