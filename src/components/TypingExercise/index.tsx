'use client'

import style from './index.module.css'
import useCheckLetter from './useCheckLetter'
const TypingExercise = ({ letters }: { letters: string[] }) => {
  const { indexLetter, animate } = useCheckLetter(letters)

  return (
    <div className={style.container}>
      <div className={`${style.letter} ${animate ? style.animate : style.hidden}`}>{letters[indexLetter]}</div>
    </div>
  )
}

export default TypingExercise
