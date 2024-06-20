import style from './keyboard.module.css'

type Props = {
  character: string
}
const Keyboard = ({ character }: Props) => {
  const formatCharacter = character.toUpperCase()

  const tabRowKeys = [
    ['⇄', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',],
    ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',],
    ['↑', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];
  return (
    <div className={style.container}>
      {
        tabRowKeys.map(rowKeys =>
          <div className={style.row__keys} key={rowKeys[2]}>
            {
              rowKeys.map(key =>
                <div
                  className={`${style.key} ${formatCharacter === key && style.activeKey}`}
                  key={key}>
                  {key}
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default Keyboard