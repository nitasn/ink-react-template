import { useState } from "react";
import { Text, useInput, useApp } from "ink";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const { exit } = useApp();

  useInput((input, key) => {
    if (input === "q") {
      exit();
    }

    if (key.return) {
      setCounter((c) => c + 1);
    }
  });

  return <Text color="green">{counter} tests passed</Text>;
}
