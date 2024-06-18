import { useState, useEffect } from "react"

const useCheckLetter = (letters: string[]) => {
  const totalLetters = letters.length
  const [indexLetter, setIndexLetter] = useState(0)
  const [keyPress, setKeyPress] = useState('')

  const handleOnKeyDown = (e: KeyboardEvent) => setKeyPress(e.key)
  const isCorrectKeyPress = letters[indexLetter] === keyPress

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown)
    isCorrectKeyPress
      ? setIndexLetter(indexLetter + 1)
      : ''

    console.log(indexLetter)
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [indexLetter, isCorrectKeyPress])

  return indexLetter
}

export default useCheckLetter