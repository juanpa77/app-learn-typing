'use client'

import { useEffect, useState } from 'react'
import Keyboard from '../keyboard'
import style from './index.module.css'
import useCheckLetter from './useCheckLetter'
import { Keys, keyPosition } from '@/keyPosition'
import ShootCharacter from '../ShootCharacter'
const TypingExercise = ({ letters }: { letters: string[] }) => {
  const { currentCharacter, animate, winnings, keyPress } = useCheckLetter(letters)
  const [shotsInScreen, setShotsInScreen] = useState<Keys[]>([])
  useEffect(() => {
    if (keyPress && keyPosition.hasOwnProperty(keyPress)) {
      setShotsInScreen([...shotsInScreen, keyPress as Keys])
    }
  }, [keyPress])

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
            <ShootCharacter
              key={shoot + i}
              character={shoot}
              keyPosition={{
                x: keyPosition[shoot].x,
                y: keyPosition[shoot].y
              }}
            />)
        }
      </div>
      <Keyboard character={currentCharacter} />
    </div>
  )
}

export default TypingExercise
