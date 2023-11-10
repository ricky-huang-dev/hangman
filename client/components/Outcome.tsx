interface Props {
  outcome: string
  apiWord: string
}
function Outcome({ outcome, apiWord }: Props) {
  return (
    <>
      {outcome === 'win' && (
        <div>
          <p>You Win!</p>
        </div>
      )}

      {outcome === 'lose' && (
        <div>
          <p>You lose ya fool!</p>
          <p> The word was {apiWord}</p>
        </div>
      )}
    </>
  )
}

export default Outcome
