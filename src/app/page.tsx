import Keyboard from "@/components/keyboard";
import styles from "./page.module.css";
import TypingExercise from "@/components/TypingExercise";

export default function Home() {
  const letters = ['A', 'B', 'C', 'D', 'E']

  return (
    <main className={styles.main}>
      <TypingExercise letters={letters} />
      <Keyboard />
    </main>
  );
}
