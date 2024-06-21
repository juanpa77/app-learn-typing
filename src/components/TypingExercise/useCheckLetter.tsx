import { useState, useEffect } from "react"
import useWinnings from "./useWinnings"

const useShowCharacter = (characters: string[]) => {
  const totalLetters = characters.length
  const formatCharacter = characters.map(character => character.toLowerCase())

  const [indexCharacter, setIndexCharacter] = useState(0)
  const [keyPress, setKeyPress] = useState('')
  const [animate, setAnimate] = useState(false)

  const handleOnKeyDown = (e: KeyboardEvent) => setKeyPress(e.key)
  const isCorrectKeyPress = formatCharacter[indexCharacter] === keyPress

  const currentCharacter = characters[indexCharacter]
  const winnings = useWinnings(keyPress, formatCharacter[indexCharacter])
  document.addEventListener('keydown', handleOnKeyDown)

  useEffect(() => {
    isCorrectKeyPress
      ? setIndexCharacter(indexCharacter + 1)
      : ''

    setAnimate(false)
    setTimeout(() => setAnimate(true), 250)

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isCorrectKeyPress])

  return { currentCharacter, animate, winnings }
}

export default useShowCharacter