'use client'

import Keyboard from '../keyboard'
import style from './index.module.css'
import useCheckLetter from './useCheckLetter'
const TypingExercise = ({ letters }: { letters: string[] }) => {
  const { currentCharacter, animate, winnings } = useCheckLetter(letters)

  return (
    <div className={style.container}>
      <div className={style.winnings}>
        <p>Winnings: $
          {winnings}</p>
      </div>
      <div className={`${style.letter} ${animate ? style.animate : style.hidden}`}>
        {currentCharacter}
      </div>
      <Keyboard character={currentCharacter} />
    </div>
  )
}

export default TypingExercise
