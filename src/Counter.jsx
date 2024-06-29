import { useState } from "react";
import { Text, useInput, useApp, Box } from "ink";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const { exit } = useApp();

  useInput((input, key) => {
    if (input.toLowerCase() === "q") {
      exit();
    }

    if (key.return) {
      setCounter((c) => c + 1);
    }
  });

  const emptyLine = <Text children=" " />;

  return (
    <Box flexDirection="column" alignSelf="flex-start" borderStyle="round" paddingX={2} paddingY={1}>
      <Text>
        Counter: <Text color="green">{counter}</Text>
      </Text>
      {emptyLine}
      <Text>Press [Enter] to increment.</Text>
      <Text>Press [Q] to quit.</Text>
    </Box>
  );
}
