'use client'

import { useEffect, useState } from 'react'
import style from './index.module.css'
import useCheckLetter from './useCheckLetter'
const TypingExercise = ({ letters }: { letters: string[] }) => {
  const indexLetter = useCheckLetter(letters)

  const [animate, setAnimate] = useState(true)
  // console.log(animate)
  useEffect(() => {
    setAnimate(true)
    console.log('animate')
    return () => {
      setTimeout(() => setAnimate(false), 800)
      setAnimate(true)
    }
  }, [])

  return (
    <div className={style.container}>
      <div className={style.letter}>{letters[indexLetter]}</div>
      {/* <Letter letter={letters[indexLetter]} /> */}
    </div>
  )
}

const Letter = ({ letter }: { letter: string }) => {
  const [animate, setAnimate] = useState(true)
  // console.log(animate)
  useEffect(() => {
    setAnimate(true)
    console.log('animate')
    return () => {
      setTimeout(() => setAnimate(false), 800)
      setAnimate(true)
    }
  }, [letter])

  return <div className={`${style.letter} ${animate ? style.animate : ''}`}>{letter}</div>
}

export default TypingExercise
