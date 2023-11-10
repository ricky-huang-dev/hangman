interface Props {
  outcome: string
  apiWord: string
}
function Outcome({ outcome, apiWord }: Props) {
  return (
    <div className="outcomes">
      {outcome === 'win' && <div>You Win!</div>}

      {outcome === 'lose' && (
        <div>
          You lose ya fool! <br />
          The word was {apiWord}
        </div>
      )}
    </div>
  )
}

export default Outcome
