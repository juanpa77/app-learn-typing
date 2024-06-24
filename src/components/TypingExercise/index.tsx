'use client'

import { useEffect, useState } from 'react'
import Keyboard from '../keyboard'
import style from './index.module.css'
import useCheckLetter, { useKey } from './useCheckLetter'
import { keysPosition, Key, Keys } from '@/keyPosition'
import ShootCharacter from '../ShootCharacter'

// TODO - Add Id to shotsInScreen to prevent delete all shoot with same character
const TypingExercise = ({ letters }: { letters: string[] }) => {

  const { currentCharacter, animate, winnings, setKeyPress } = useCheckLetter(letters)
  const [shotsInScreen, setShotsInScreen] = useState<Keys[]>([])
  const $currentCharacter = document.getElementsByClassName(style.letter)[0] as HTMLDivElement

  const currentCharacterPosition = {
    x: $currentCharacter?.offsetTop,
    y: $currentCharacter?.offsetLeft
  }

  console.log(currentCharacterPosition)
  const onKeyPress = (key: string) => {
    if (key && keysPosition.hasOwnProperty(key)) {
      setKeyPress(key)
      setShotsInScreen(shots => [
        ...shots,
        {
          key: key as Key,
          x: keysPosition[key as Key].x,
          y: keysPosition[key as Key].y
        }
      ])
    }
  }

  const deleteShoot = (key: Key) => setShotsInScreen(shotsInScreen.filter(shoot => shoot.key !== key))
  // console.log(shotsInScreen)
  const keyPress = useKey(onKeyPress)

  return (
    <div className={style.container}>
      <div className={style.winnings}>
        <p>Winnings: $
          {winnings}</p>
      </div>
      <div className={`${style.letter} ${animate ? style.animate : style.hidden}`}>
        {currentCharacter}
      </div>
      <div className={style.shootKeyContainer}>
        {
          shotsInScreen.map((shoot, i) =>
            // shoot.
            <ShootCharacter
              key={shoot.key + i}
              character={shoot.key}
              keyPosition={{
                x: shoot.x,
                y: shoot.y
              }}
              deleteShoot={deleteShoot}
            />)
        }
      </div>
      <Keyboard character={currentCharacter} />
    </div>
  )
}

export default TypingExercise
