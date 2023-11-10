import img0 from '../public/base.png'
import img1 from '../public/pole.png'
import img2 from '../public/base-up.png'
import img3 from '../public/rope-and-head.png'
import img4 from '../public/torso.png'
import img5 from '../public/arms.png'
import img6 from '../public/legs.png'

interface Props {
  tries: number
}

function Hangman({ tries }: Props) {
  const imgUrl = [img0, img1, img2, img3, img4, img5, img6]

  return (
    <>
      <div>{tries}</div>
      <div>
        <img src={imgUrl[tries]} alt="" />
      </div>
    </>
  )
}

export default Hangman
