import { useEffect, useState } from "react"

const useWinnings = (keyPress: string, currentCharacter: string) => {
  const [rewardAmountAccumulator, setRewardAmountAccumulator] = useState(3)
  const [winnings, setWinnings] = useState(0)

  useEffect(() => {
    if (keyPress === currentCharacter) {
      setWinnings(winnings + rewardAmountAccumulator)
      setRewardAmountAccumulator(3)
      return
    }
    setRewardAmountAccumulator(rewardAmountAccumulator => {
      if (winnings === 0) return rewardAmountAccumulator
      return rewardAmountAccumulator > 1 ? rewardAmountAccumulator - 1 : rewardAmountAccumulator
    })
  }, [keyPress])

  return winnings
}

export default useWinnings