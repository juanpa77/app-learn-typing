import { useState, useEffect } from "react"

const useCheckLetter = (letters: string[]) => {
  const totalLetters = letters.length
  const formatLetters = letters.map(letter => letter.toLowerCase())

  const [indexLetter, setIndexLetter] = useState(0)
  const [keyPress, setKeyPress] = useState('')

  const handleOnKeyDown = (e: KeyboardEvent) => setKeyPress(e.key)
  const isCorrectKeyPress = formatLetters[indexLetter] === keyPress

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown)
    isCorrectKeyPress
      ? setIndexLetter(indexLetter + 1)
      : ''

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [indexLetter, isCorrectKeyPress])

  return indexLetter
}

export default useCheckLetter