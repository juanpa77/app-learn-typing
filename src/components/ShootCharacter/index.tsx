
import style from './index.module.css'

type Props = {
  character: string,
  keyPosition: {
    x: number,
    y: number
  }
}
const ShootCharacter = ({ character, keyPosition }: Props) => {
  // const [animate, setAnimate] = useState(false)

  return (
    <div
      className={`${style.shootKey} ${''}`}
      style={{
        top: `${keyPosition.y}px`,
        left: `${keyPosition.x}px`
      }}
    >
      {character}
    </div>
  )
}

export default ShootCharacter
