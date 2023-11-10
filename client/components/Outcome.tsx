interface Props {
  outcome: string
}
function Outcome({ outcome }: Props) {
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
        </div>
      )}
    </>
  )
}

export default Outcome
