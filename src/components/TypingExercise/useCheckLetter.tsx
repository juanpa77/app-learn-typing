import { useState, useEffect } from "react"
import useWinnings from "./useWinnings"

const useShowCharacter = (characters: string[]) => {
  const totalLetters = characters.length
  const formatCharacter = characters.map(character => character.toLowerCase())

  const [indexCharacter, setIndexCharacter] = useState(0)
  const [keyPress, setKeyPress] = useState('')
  const [animate, setAnimate] = useState(false)

  // const handleOnKeyDown = (e: KeyboardEvent) => setKeyPress(e.key)
  const isCorrectKeyPress = formatCharacter[indexCharacter] === keyPress

  const currentCharacter = characters[indexCharacter]
  const winnings = useWinnings(keyPress, formatCharacter[indexCharacter])
  // document.addEventListener('keydown', handleOnKeyDown)

  useEffect(() => {
    if (isCorrectKeyPress) {
      console.log(keyPress)
      setIndexCharacter(indexCharacter + 1)
      indexCharacter === totalLetters - 1 && setIndexCharacter(0)
    }

    setAnimate(false)
    setTimeout(() => setAnimate(true), 250)

    return () => {
      // document.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isCorrectKeyPress])

  return { currentCharacter, animate, winnings, keyPress, setKeyPress }
}
export const useKey = (onKeyPress: (key: string) => void) => {

  const [keyPress, setKeyPress] = useState('')

  const handleOnKeyDown = (e: KeyboardEvent) => {
    onKeyPress(e.key)
    setKeyPress(e.key)
  }


  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  return keyPress
}

export default useShowCharacter