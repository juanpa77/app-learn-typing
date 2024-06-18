'use client'

import style from './index.module.css'
import useCheckLetter from './useCheckLetter'
const TypingExercise = ({ letters }: { letters: string[] }) => {
  const indexLetter = useCheckLetter(letters)

  return (
    <div className={style.container}>
      <div>{letters[indexLetter]}</div>
    </div>
  )
}

export default TypingExercise