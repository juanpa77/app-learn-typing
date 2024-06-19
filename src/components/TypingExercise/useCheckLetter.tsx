import { useState, useEffect } from "react"

const useShowCharacter = (characters: string[]) => {
  const totalLetters = characters.length
  const formatLetters = characters.map(character => character.toLowerCase())

  const [indexCharacter, setIndexCharacter] = useState(0)
  const [keyPress, setKeyPress] = useState('')
  const [animate, setAnimate] = useState(false)

  const handleOnKeyDown = (e: KeyboardEvent) => setKeyPress(e.key)
  const isCorrectKeyPress = formatLetters[indexCharacter] === keyPress

  const currentCharacter = characters[indexCharacter]

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown)
    isCorrectKeyPress
      ? setIndexCharacter(indexCharacter + 1)
      : ''

    setAnimate(false)
    setTimeout(() => setAnimate(true), 800)

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [indexCharacter, isCorrectKeyPress])

  return { currentCharacter, animate }
}

export default useShowCharacter