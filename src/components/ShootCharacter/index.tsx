
import { Key } from '@/keyPosition'
import style from './index.module.css'

type Props = {
  character: Key,
  keyPosition: {
    x: number,
    y: number
  }
  deleteShoot: (key: Key) => void
}
const ShootCharacter = ({ character, keyPosition, deleteShoot }: Props) => {
  // const [animate, setAnimate] = useState(false)

  return (
    <div
      onAnimationEnd={() => deleteShoot(character)}
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
